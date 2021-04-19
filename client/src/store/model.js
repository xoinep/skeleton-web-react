import { action, thunk } from "easy-peasy";
import axios from "axios";

let baseURL =
  "https://e8l09j4oja.execute-api.us-east-1.amazonaws.com/dev/get-pagesource?url=";
const model = {
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  urls: [],
  setUrls: action((state, payload) => {
    state.urls = payload;
  }),
  pageSource: null,
  setPageSource: action((state, payload) => {
    state.pageSource = payload;
  }),
  getUrlFromPageSource: action((state, payload) => {
    const ps = state.pageSource;
    // console.log(ps);
    // const regEx = /hd_src:(.*?)sd_src/;
    const regEx = /video&quot;,&quot;src&quot;:&quot;(.*?)&quot;,&quot/;
    let raw_url = regEx.exec(ps);
    console.log(raw_url);
    if (raw_url !== null) {
      let url = raw_url[1].replaceAll("amp;", "");
      state.urls = [...state.urls, url.replace(/\\/g, "")];
    }
  }),
  getPageSource: thunk(async (actions, payload) => {
    const { url } = payload;
    actions.setLoading(true);
    const { data } = await axios.get(`${baseURL}${url}`);
    actions.setLoading(false);
    actions.setPageSource(data.content);
    actions.getUrlFromPageSource();
  }),
};

export default model;

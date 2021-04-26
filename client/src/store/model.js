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
    const regEx = /video&quot;,&quot;src&quot;:&quot;(.*?)&quot;,&quot/;
    let raw_url = regEx.exec(ps);
    if (raw_url !== null) {
      let url = raw_url[1].replaceAll("amp;", "");
      state.urls = [...state.urls, url.replace(/\\/g, "")];
    } else {
      state.urls = null;
    }
  }),
  getPageSource: thunk(async (actions, payload) => {
    const { url } = payload;
    actions.setLoading(true);
    const { data } = await axios.get(`${baseURL}${url}`);
    actions.setPageSource(data.content);
    actions.getUrlFromPageSource();
    actions.setLoading(false);
  }),
  pcbToken: null,
  getAndSetPcbToken: action((state, payload) => {
    const ps = state.pageSource;
    const regEx = /permalink:"(.*?)",setToken/;
    let token = regEx.exec(ps);
    state.pcbToken = token != null ? token[1] : null;
  }),
  getPageSourceByPcbToken: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const { pcbToken } = payload;
    let url = `https://m.facebook.com${pcbToken}`;
    const { data } = await axios.get(`${baseURL}${url}`);
    actions.setPageSource(data.content);
    actions.getUrlFromPageSource();
    actions.setLoading(false);
  }),
};

export default model;

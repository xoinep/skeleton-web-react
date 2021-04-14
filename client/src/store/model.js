import { action, thunk } from "easy-peasy";
import axios from "axios";

let baseURL =
  "https://e8l09j4oja.execute-api.us-east-1.amazonaws.com/dev/get-pagesource?url=";
const model = {
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  urls: [
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t42.9040-4/119352225_702182977308264_6414427700029997102_n.mp4?_nc_cat=109&ccb=1-3&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=Vqu3DTR-GSQAX_UhQaj&_nc_ht=scontent.fhan2-3.fna&oh=5d9a8f66d16ec538f8f107c98857c769&oe=6076B12C",
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t42.9040-4/119352225_702182977308264_6414427700029997102_n.mp4?_nc_cat=109&ccb=1-3&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=Vqu3DTR-GSQAX_UhQaj&_nc_ht=scontent.fhan2-3.fna&oh=5d9a8f66d16ec538f8f107c98857c769&oe=6076B12C",
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t42.9040-4/119352225_702182977308264_6414427700029997102_n.mp4?_nc_cat=109&ccb=1-3&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=Vqu3DTR-GSQAX_UhQaj&_nc_ht=scontent.fhan2-3.fna&oh=5d9a8f66d16ec538f8f107c98857c769&oe=6076B12C",
    "https://scontent.fhan2-3.fna.fbcdn.net/v/t42.9040-4/119352225_702182977308264_6414427700029997102_n.mp4?_nc_cat=109&ccb=1-3&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=Vqu3DTR-GSQAX_UhQaj&_nc_ht=scontent.fhan2-3.fna&oh=5d9a8f66d16ec538f8f107c98857c769&oe=6076B12C",
  ],
  setUrls: action((state, payload) => {
    state.urls = payload;
  }),
  pageSource: null,
  setPageSource: action((state, payload) => {
    state.pageSource = payload;
  }),
  getPageSource: thunk(async (actions, payload) => {
    const { url } = payload;
    const { data } = await axios.get(`${baseURL}+${url}`);
    console.log(data);
    actions.setPageSource(data);
  }),
};

export default model;

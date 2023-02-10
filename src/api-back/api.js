import axios from "axios";

const api = axios.create({
  baseURL: "https://api-bank-mobile.vercel.app/",
  responseType:"json",
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br",
  responseType:"json",
});

export default api;
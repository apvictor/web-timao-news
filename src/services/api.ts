import axios from "axios";

const api = axios.create({
  // baseURL: "https://api-timao-news.herokuapp.com/api",
  baseURL: "http://localhost:8080/api",
});

export default api;
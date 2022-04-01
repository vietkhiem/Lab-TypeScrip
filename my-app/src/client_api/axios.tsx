import axios from "axios";

const clientApiUrl = "http://localhost:3002";

const api = axios.create({
  baseURL: clientApiUrl,
});

export default api;

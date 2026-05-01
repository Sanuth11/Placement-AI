import axios from "axios";

const localBackendUrl = process.env.REACT_APP_API_URL || "https://placement-ai-zf84.onrender.com/api";

const API = axios.create({
  baseURL: localBackendUrl
});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;

});

export default API;
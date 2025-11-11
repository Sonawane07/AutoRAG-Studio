// frontend/src/api/apiClient.js
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

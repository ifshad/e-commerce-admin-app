import axios from "axios";

const apiClient = axios.create({
  baseURL: "/mock-data", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

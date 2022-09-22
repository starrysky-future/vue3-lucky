import axios from "axios";
import { getTokenAUTH } from "@/utils/auth";

const service = axios.create({
  baseURL: "http://localhost:8888", // 请求前缀
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  timeout: 10000, // 请求超时时间
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    if (getTokenAUTH()) {
      config.headers.Authorization = getTokenAUTH();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;

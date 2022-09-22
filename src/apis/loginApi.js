import http from "./request";

export function getLogin(params) {
  return http.post("/api/user/login", params);
}

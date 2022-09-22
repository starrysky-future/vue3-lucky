import http from "./request";

export function getLogin(params) {
  return http.post("/user/login", params);
}

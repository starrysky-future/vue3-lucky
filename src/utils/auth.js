const TOKEN_KEY = "_TOKEN";

export function getTokenAUTH() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setTokenAUTH(token) {
  return localStorage.setItem(TOKEN_KEY, token);
}

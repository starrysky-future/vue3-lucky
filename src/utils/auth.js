const TOKEN_KEY = "_TOKEN";

export function getTokenAUTH() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setTokenAUTH(token) {
  return sessionStorage.setItem(TOKEN_KEY, token);
}

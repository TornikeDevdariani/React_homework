import { jwtDecode } from "jwt-decode";

export const validToken = (token) => {
  const data = jwtDecode(token);
  const currentDate = Date.now() / 1000;

  return data.exp > currentDate;
};
export const decodeToken = (token) => {
  return jwtDecode(token);
};

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

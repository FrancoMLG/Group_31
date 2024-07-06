import axios from "axios";

const api = axios.create({baseURL: "http://localhost:5000"});

// api.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

export const signIn = (formData) => api.post("/users/signin", formData);
export const signUp = (formData) => api.post("/users/signup", formData);

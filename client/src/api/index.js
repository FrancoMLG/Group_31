import axios from "axios";

const api = axios.create({baseURL: "http://localhost:5000"});

export const signUp = (formData) => api.post("/users/signup", formData);

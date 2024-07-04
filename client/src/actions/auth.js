import * as api from "../api/index.js";

export const signUp = (formData) => async () => {
  try {
    await api.signUp(formData);
  } catch (error) {
    console.log(error);
  }
};

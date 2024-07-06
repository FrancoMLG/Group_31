import * as api from "../api/index.js";

export const signIn = (formData) => async () => {
  try {
    const {data} = await api.signIn(formData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData) => async () => {
  try {
    await api.signUp(formData);
  } catch (error) {
    console.log(error);
  }
};

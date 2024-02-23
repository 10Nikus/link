"use server";

export const register = async (formData: any) => {
  const { email, password, password2 } = Object.fromEntries(formData);
  console.log(email, password, password2);
};

export const login = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
};

import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL;

export const adduserapi = async (userdata) => {
  try {
    const response = await axios.post(`${BE_URL}/register`, userdata);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
export const registerverifyemail = async (token) => {
  try {
    const response = await axios.post(
      `${BE_URL}/register-verify-email?token=${token}`
    );
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
export const loginuserapi = async (userdata) => {
  try {
    const response = await axios.post(`${BE_URL}/login`, userdata);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
export const emailverifyapi = async (useremail) => {
  try {
    const response = await axios.post(`${BE_URL}/verify-email`, useremail);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
export const resetpasswordapi = async (token, resetpassword) => {
  try {
    const response = await axios.post(
      `${BE_URL}/reset-password?token=${token}`,
      resetpassword
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};
export const urlshortner = async (data) => {
  try {
    const response = await axios.post(`${BE_URL}/urlshortner`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};
export const short = async (data) => {
  try {
    const response = await axios.post(`${BE_URL}/short?url=${data}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};
export const urlhistory = async () => {
  try {
    const response = await axios.get(`${BE_URL}/history`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};
export const dashboardapi = async (data) => {
  try {
    const response = await axios.post(`${BE_URL}/dashboard`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.msg);
  }
};

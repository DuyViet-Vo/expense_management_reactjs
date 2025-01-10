import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export async function login({ username, password }) {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, {
      username,
      password,
    });

    return response.data; // Trả về dữ liệu từ server
  } catch (error) {
    // Kiểm tra lỗi từ server hoặc lỗi khác
    console.log(error);
    const errorMessage = error.response.data.message;
    throw new Error(errorMessage);
  }
}

export async function register({ username, email, password }) {
  try {
    const response = await axios.post(`${apiUrl}/users/resgister`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data.message;
    throw new Error(errorMessage);
  }
}

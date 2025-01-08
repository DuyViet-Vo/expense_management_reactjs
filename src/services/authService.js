import axios from "axios";

export async function login({ username, password }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    const response = await axios.post(`${apiUrl}/users/login`, {
      username,
      password,
    });

    return response.data; // Trả về dữ liệu từ server
  } catch (error) {
    // Kiểm tra lỗi từ server hoặc lỗi khác
    console.log(error)
    const errorMessage = error.response.data.message;
    throw new Error(errorMessage);
  }
}

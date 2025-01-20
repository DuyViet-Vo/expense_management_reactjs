import axios from 'axios';

// Lấy URL từ biến môi trường
const apiUrl = process.env.REACT_APP_API_URL;

export const getGroupsWithPagination = async (page = 1, perPage = 5) => {
  try {
    const response = await axios.get(`${apiUrl}/groups/get-all?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Lấy token từ localStorage hoặc từ store
      },
    });
    return response.data; // API trả về dữ liệu
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch groups');
  }
};

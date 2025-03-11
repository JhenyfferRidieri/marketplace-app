import axios from 'axios';

const API_URL = 'http://127.0.0.1:3333/products'; // URL do back-end

const api = axios.create({
  baseURL: API_URL,
});

export const getProducts = async () => {
  const response = await api.get('/');
  return response.data;
};

export const getProductByCategory = async (category) => {
  const response = await api.get(`/category/${category}`);
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await api.get(`/search?query=${query}`);
  return response.data;
};

export const getPaginatedProducts = async (page = 1, limit = 5) => {
  const response = await api.get(`/paginate?page=${page}&limit=${limit}`);
  return response.data;
};

export default api;

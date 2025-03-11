import axios from 'axios';

const API_URL = 'http://127.0.0.1:3333'; 

const api = axios.create({
  baseURL: API_URL,
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

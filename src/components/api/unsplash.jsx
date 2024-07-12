// src/api/unsplash.js
import axios from 'axios';

const API_KEY = 'U7U_N67n8E4gRYUns4BBx8xl975UEcDTnPRDhMcQ570';
const BASE_URL = "https://api.unsplash.com/search/photos";

export const searchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      client_id: API_KEY,
    },
  });
  return response.data;
};

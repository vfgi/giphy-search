import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'http://api.giphy.com/v1',
});

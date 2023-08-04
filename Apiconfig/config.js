import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://systembetahouse-jb.vercel.app',
});

import axios from 'axios';
import cookie from 'js-cookie';

export const api = axios.create({
  baseURL: 'https://systembetahouse-jb.vercel.app',
});

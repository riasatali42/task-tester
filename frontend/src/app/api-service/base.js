import _axios from 'axios';

const baseUrl = "http://localhost:3000/";

export const axios = _axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  withCredentials: true,
});

axios.all = _axios.all;
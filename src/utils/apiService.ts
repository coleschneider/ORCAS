import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.LAMBDA_CDN
})
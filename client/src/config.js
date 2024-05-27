import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://iwipwq-nest.herokuapp.com/api/',
});

const PF = 'https://iwipwq-nest.herokuapp.com/images/';

import axios from 'axios';
axios.defaults.headers.common['Accept'] = 'application/json';
const BASE_URL = process.env.REACT_APP_API_URL;

const customFetch = axios.create({
  baseURL: BASE_URL,
});

export default customFetch;

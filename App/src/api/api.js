import axios from 'axios';
import config from './config';

export default axios.create({
  // The base url of external api
  baseURL: config.api_url,
  headers: {
    Authorization: `Bearer ${
      JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).token
    }`
  }
});

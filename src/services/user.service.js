import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8081/api/test/';
export default  {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  },
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  },
}
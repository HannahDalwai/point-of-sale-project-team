import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://pointonsalebackend.herokuapp.com/';
export default  {
  getPublicContent() {
    return axios.get(API_URL + 'users');
  },
 
  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  },
}
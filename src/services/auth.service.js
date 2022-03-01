import axios from 'axios';
const API_URL = 'https://pointonsalebackend.herokuapp.com/users';
export default {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },
  logout() {
    localStorage.removeItem('user');
  },
  register(user) {
    return axios.post(API_URL, {
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      password: user.password
    });
  }
}
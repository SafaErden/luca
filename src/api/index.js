import axios from 'axios';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let header = {};
  if (user && user.user) {
    header = { Authorization: `Bearer ${user.user}` };
  }
  return header;
};
export default axios.create({
  baseURL: 'http://localhost:3001/',
  headers: authHeader(),
});

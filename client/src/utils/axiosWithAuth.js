import Axios from 'axios';

const axiosWithAuth = () => Axios.create({
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});

export default axiosWithAuth;

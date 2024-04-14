import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://fruitables-02.vercel.app/api/v1'
});

axiosClient.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
    }

    return Promise.reject(Object.keys(error));
  }
);

export { axiosClient };

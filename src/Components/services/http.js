import axios from 'axios';

export default axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  Headers: {
    'Content-type': 'application/json',
  },
});

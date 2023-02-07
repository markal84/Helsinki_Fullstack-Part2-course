import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};

export default getAll;

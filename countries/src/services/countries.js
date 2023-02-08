import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';
const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;

export const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};

// weather service (for testing api key is visibile, add it to env var later)

export const getWeather = (country) => {
  const weatherURL = 'https://weatherapi-com.p.rapidapi.com/current.json';
  const api = WEATHER_API;

  const options = {
    method: 'GET',
    url: weatherURL,
    params: { q: country },
    headers: {
      'X-RapidAPI-Key': api,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  return axios.request(options);
};

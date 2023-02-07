/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import getAll from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  // get list of all countries from api and store them in countries variable
  useEffect(() => {
    getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  // show filtered countries
  const foundCountries =
    search === ''
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        );

  const isMultiDisplay = foundCountries.length > 10;
  const isEqualOne = foundCountries.length === 1;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Countries</h1>
      <div>
        find countries{' '}
        <input type="text" value={search || ''} onChange={handleSearch} />
      </div>
      <div>
        {isMultiDisplay ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          foundCountries.map((country) => {
            return !isEqualOne ? (
              <p key={country.cca2}>{country.name.common}</p>
            ) : (
              <div key={country.cca2}>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <h4>Languages:</h4>
                <ul>
                  {Object.values(country.languages).map((lang) => (
                    <li key={Math.random()}>{lang}</li>
                  ))}
                </ul>
                <div>
                  <img src={country.flags.svg} alt="country flag" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;

import Weather from './Weather';

function CountryInfo({ country, weather }) {
  const info = { capital: 'Capital:', area: 'Area:', languages: 'Languages:' };

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        {info.capital} {country.capital}
      </p>
      <p>
        {info.area} {country.area}
      </p>
      <h4>{info.languages}</h4>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={Math.random()}>{lang}</li>
        ))}
      </ul>
      <div>
        <img
          style={{ width: '200px' }}
          src={country.flags.svg}
          alt="country flag"
        />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Weather country={country} weather={weather} />
      </div>
    </div>
  );
}

export default CountryInfo;

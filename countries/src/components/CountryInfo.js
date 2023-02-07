function CountryInfo({ country }) {
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
        <img src={country.flags.svg} alt="country flag" />
      </div>
    </div>
  );
}

export default CountryInfo;

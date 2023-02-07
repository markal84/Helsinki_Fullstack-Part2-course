import Country from './Country';
import CountryInfo from './CountryInfo';

function Countries({ foundCountries, isEqualOne }) {
  return foundCountries.map((country) => {
    return !isEqualOne ? (
      <Country key={country.cca2} country={country} />
    ) : (
      <CountryInfo key={country.cca2} country={country} />
    );
  });
}

export default Countries;

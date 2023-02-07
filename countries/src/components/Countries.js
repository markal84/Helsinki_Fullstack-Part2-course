import Country from './Country';
import CountryInfo from './CountryInfo';

function Countries({ foundCountries, isEqualOne, handleShow }) {
  return foundCountries.map((country) => {
    return !isEqualOne ? (
      <Country
        key={country.cca2}
        country={country}
        handleShow={() => handleShow(country)}
      />
    ) : (
      <CountryInfo key={country.cca2} country={country} />
    );
  });
}

export default Countries;

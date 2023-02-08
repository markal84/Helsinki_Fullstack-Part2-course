function Country({ country, handleShow }) {
  return (
    <p>
      {country.name.common}{' '}
      <button type="button" value={country.name.common} onClick={handleShow}>
        show
      </button>
    </p>
  );
}

export default Country;

function Search({ search, handleSearch, resetSearch }) {
  return (
    <div>
      find countries{' '}
      <input type="text" value={search || ''} onChange={handleSearch} />{' '}
      <button type="button" onClick={resetSearch}>
        reset
      </button>
    </div>
  );
}

export default Search;

function Weather({ country, weather }) {
  // const conditions = weather.condition;

  return (
    <>
      <h3> Weather in {country.capital} </h3>
      <div>
        <p>temperature: {weather.temp_c} Celcius</p>
        <p>wind: {weather.wind_kph} km/h</p>
      </div>
    </>
  );
}

export default Weather;

/*
fix later than var weather must be
set to use map ( conditional rendering )

        {Object.values(conditions).map((val) => {
          return <p key={Math.random()}>{val}</p>;
        })}
*/

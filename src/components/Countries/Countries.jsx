import './countries.css'

function Countries({ country }) {
  const {
    region,
    area,
    population,
    flags: { png },
    flags: { alt },
    name: { common },
    capital,
  } = country;
  console.log(population);
//   console.log(flags);
  return <div>
    <section>
    <h2>{common}</h2>
    <div class="country-info">
      <div>
        <p><strong>Region: {region}</strong> </p>
        <p><strong>Area: {area}</strong> square kilometers</p>
        <p><strong>Population: {population}</strong> </p>
        <p><strong>Capital: {capital}</strong> </p>
      </div>
      <div>
        <img src={png} alt="Flag" />
      </div>
    </div>

    <div class="flag-info">
      <h4>This is a description of the flag</h4>
      <p>{alt}</p>
    </div>
  </section>
  </div>;
}

export default Countries;

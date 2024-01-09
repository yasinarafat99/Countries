import React, { useEffect, useState } from 'react'
import Countries from '../components/Countries/Countries';
import './countryApi.css'

function CountryApi() {
    const url = 'https://restcountries.com/v3.1/all';

    const [countries, setCountries] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountries(data));
    },[]);


  return (
    <div className='country_grid'>
        {
            countries &&
            countries.map((country) => <Countries country={country} key={''}/>)
        }
    </div>
  )
}

export default CountryApi;
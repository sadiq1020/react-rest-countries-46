import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div>
                <h2>Hello from Countries: {countries.length}</h2>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country desh={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

//  name={country.name.common} population={country.population} area={country.area} region={country.region}
import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const { name, population, area, region, flags } = props.desh
    return (
        <div className='country bg-warning' >
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;

/* 
            <h2>Country name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p><small>Area: {props.area}</small></p>
            <p><small>Region: {props.region}</small></p>
*/
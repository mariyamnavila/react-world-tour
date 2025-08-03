import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited' :'non-visited'}`}>
            <img style={{ width: "100%", height: "160px", borderRadius: '10px' }} src={flags.png} alt="" />
            <h2 style={{color: visited ? 'purple' : 'white'}} className='text'>Name: {name?.common}</h2>
            <p className='text'>Population: {population}</p>
            <p className='text'>Area: {area}</p>
            <p className='text'><small>Code: {cca3}</small></p>
            <button style={{ width: '100%' }} onClick={handleVisited}>{visited ? "Visited" : 'Going'}</button>
            <div className='text'>
                {visited ? 'I have visited This country' : 'I want to visit this country'}
            </div>
        </div>
    );
};

export default Country;
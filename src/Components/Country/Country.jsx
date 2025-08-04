import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    const passWithParams = () => handleVisitedCountry(country)

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img style={{ width: "100%", height: "160px", borderRadius: '10px' }} src={flags.png} alt="" />
            <h2 style={{ color: visited ? 'purple' : 'white' }} className='text'>Name: {name?.common}</h2>
            <p className='text'>Population: {population}</p>
            <p className='text'>Area: {area}</p>
            <p className='text'><small>Code: {cca3}</small></p>
            <button style={{ width: '100%', marginBottom: '8px' }} onClick={passWithParams}>Mark visited </button>
            <button style={{ width: '100%', marginBottom: '8px' }} onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags  </button>
            <button style={{ width: '100%' }} onClick={handleVisited}>{visited ? "Visited" : 'Going'}</button>
            <div className='text'>
                {visited ? 'I have visited This country' : 'I want to visit this country'}
            </div>
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;
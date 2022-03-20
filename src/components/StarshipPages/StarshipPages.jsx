import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()
  
useEffect(()=> {
  getStarshipDetails(location.state.starship.url)
  .then(starshipDetails => setStarshipDetails (starshipDetails))
}, [])

  return ( 
    <>
      <div className='starship-container'>
        {starshipDetails.name ?
          <>
            <p>NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {starshipDetails.name}</p>
            <p>MODEL:&nbsp;&nbsp;&nbsp; {starshipDetails.model}</p>
            <p><a href='/'>RETURN</a></p>
          </>
          :
          <>
            <h2>Loading starship details...</h2>
          </>
        }
      </div>
    </>
  );
}

export default StarshipPage;
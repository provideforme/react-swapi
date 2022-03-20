import { useState, useEffect } from 'react';
import { getStarshipList } from '../../services/sw-api';
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])
  
  useEffect(()=> {
    getStarshipList()
    .then(starshipsData => setStarships(starshipsData.results))
  })

  return ( 
    <>
      <div>
        <div className='starship-list'>
          {starships.map((starship) => (
            <Link to='/starship' state={{starship}} key={starship.index}>
              <div className='starships-container' >
                {starship.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarshipList;

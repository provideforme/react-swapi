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
        <h3>Class List</h3>
        <div className='icon-container'>
          {starships.map((starship) => (
            <Link to='/starship' state={{starship}} key={starship.index}>
              <div id="classDiv" >
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

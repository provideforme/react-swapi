import { Link } from 'react-router-dom'

const StarshipPage = (props) => {
  return ( 
    <>
      <Link to={`/starships/${props.starships.index}`}>
        {props.starships.name}
      </Link>
      <br />
    </>
  );
}

export default StarshipPage;
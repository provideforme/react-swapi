import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './components/StarshipPages/StarshipPages';

function App() {

  return (
    <>
      <div className='header'>STAR WARS STARSHIPS</div>
      <Routes>
        <Route path='/' 
        element={<StarshipList />}/>
        <Route path='/starship' 
        element={<StarshipPage />}/>
      </Routes>
    </>
  );
}

export default App;

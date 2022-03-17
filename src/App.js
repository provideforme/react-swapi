import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './components/StarshipPages/StarshipPages';

function App() {

  return (
    <>
      <h1>this is our app</h1>
      <a href='/starships'>Starship List</a>
    <Routes>
      <Route path='/starships' 
      element={<StarshipList />}/>
      <Route path='/starship' 
      element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;

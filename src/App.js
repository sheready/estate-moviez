import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import DisplayMovies  from './DisplayMovies';
import Home  from './Home';




const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
   

      <Routes>
        <Route path="/movies" element={<DisplayMovies />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )  
}

export default App;

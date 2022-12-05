import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import DisplayMovies  from './components/DisplayMovies';
import Home  from './components/Home';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <Navbar/>
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

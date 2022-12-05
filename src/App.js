import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import SearchMovies  from './components/SearchMovies';
import Home  from './components/Home';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )  
}

export default App;

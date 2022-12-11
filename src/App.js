import './App.css';
import { Route, Routes} from "react-router-dom";
import SearchMovies  from './components/SearchMovies';
import Home  from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Navbar />
      <Content />
    </div>
  )  
}
const Content = () => {
  return(
    <div>
      <Routes>
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;

import './App.css';
import { useEffect } from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a3e80fae8msh1b451bf9acff82ep1721f0jsn91125e75f169',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
const movie1 = 
  {
    "id": "tt0060153",
    "primaryImage": {
        "id": "rm4086331136",
        "width": 1917,
        "height": 2941,
        "url": "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_.jpg",
        "caption": {
            "plainText": "Adam West, Cesar Romero, Frank Gorshin, Burgess Meredith, Lee Meriwether, and Burt Ward in Batman: The Movie (1966)",
            "__typename": "Markdown"
        },
        "__typename": "Image"
    },
    "titleType": {
        "text": "Movie",
        "id": "movie",
        "isSeries": false,
        "isEpisode": false,
        "__typename": "TitleType"
    },
    "titleText": {
        "text": "Batman: The Movie",
        "__typename": "TitleText"
    },
    "releaseYear": {
        "year": 1966,
        "endYear": null,
        "__typename": "YearRange"
    },
    "releaseDate": {
        "day": 8,
        "month": 12,
        "year": 1966,
        "__typename": "ReleaseDate"
    }
}

const App = () => {
//a function to call our movies

  const getAllUpcomingMovies = async (title) => {
    try{
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/akas/%22${title}%22`, options);
    const data = await response.json();
    console.log(data);
    }catch(err){
      console.error(err);
    } 
  }

  useEffect(() => {
    getAllUpcomingMovies("Batman");

  }, []);

  return (
    <div className='app'>
       <h1>Estate Moviez</h1>
      <div className='search'>

        <input placeholder='Search for movies' 
        value="" 
        onChange={() => {}}>
        </input>

        <img src={searchIcon} 
        alt="search" 
        onClick={() => {}}
        />

        <div className="container">
          <MovieCard movie1={movie1} />
          
        </div>


      </div>
    </div>
   
  );
}

export default App;

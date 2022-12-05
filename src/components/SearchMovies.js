
import { useState, useEffect } from 'react';
import { Input } from 'antd';
import MovieCard from './MovieCard';
import {LoadingOutlined} from '@ant-design/icons';



const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a3e80fae8msh1b451bf9acff82ep1721f0jsn91125e75f169',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const { Search } = Input;

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/akas/%22${title}%22`, options);
            const data = await response.json();
            setIsLoaded(true);
            setMovies(data);
            console.log(data)
        } catch (err) {
            setIsLoaded(true);
            setError(error);
            console.error(err);
        }
    }

    useEffect(() => {
        searchMovies("Batman");
    }, []);


    if (error) {
        return <div> <p>Error: {error.message}</p> </div>
    } else if (!isLoaded){
            return <div> <LoadingOutlined></LoadingOutlined> </div>
    }else{
        return (
            <div className='app'>
                <h1>Estate Moviez</h1>

                <Search
                    placeholder="input movie title"
                    allowClear
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    onClick={() => searchMovies(searchTitle)}
                    style={{
                        width: 200,
                    }}
                />

                {movies.results?.length > 0 ? (
                    <div className="moviecontainer">
                    {movies.results.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                    ) : (
                    <div className='empty'> 
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        )
    };

}

export default SearchMovies;


import React, {useEffect, useState} from "react";

import MovieCard from "./MovieCard.jsx";
import './App.css';
import SearchIcon from './search.svg';


// https://www.omdbapi.com/?i=tt3896198&apikey=2aa54ec1

const API_URL = 'https://www.omdbapi.com/?apikey=2aa54ec1';
const movie1 = {
                "Title": "Batman",
                "Year": "1989",
                "imdbID": "tt0096895",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
            }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies(searchTerm)
    }, [])

    return (
        <div className='app'>
            <h1 >Movies Land</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search"  onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies Found</h2>
                </div>
            )
            }
            
        </div>
    )
}

export default App;
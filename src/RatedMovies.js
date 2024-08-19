import React, { useState, useEffect } from 'react';
import './RatedMovies.css';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDRkMTAyOTBkNmNiN2EyODBjNzM3MDVkNmI2NDNkNCIsIm5iZiI6MTcyMzQ1MTA3NC4yMTc5OTEsInN1YiI6IjY2YjMxOWI0OTE0NzA1ZTc5MDZmNzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01csjL9h7I-Dp5b8DxbKid78mjn-kcjVL1G40nrWSv4';

const fetchRatedMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching rated movies:', error);
        return [];
    }
};

const RatedMovies = () => {
    const [ratedMovies, setRatedMovies] = useState([]);

    useEffect(() => {
        const getRatedMovies = async () => {
            const movies = await fetchRatedMovies();
            setRatedMovies(movies);
        };

        getRatedMovies();
    }, []);

    return (
        <div className="movie-list">
            
            <div className="movies">
                {ratedMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                        />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatedMovies;

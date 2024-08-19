import React from 'react';
import MovieCard from './MovieCard';
import './Favorites.css';

const Favorites = ({ favorites, toggleFavorite }) => {
    console.log('Favorites:', favorites);

    return (
        <div className="container">
            {favorites.length > 0 ? (
                favorites.map((movie) => (
                    <MovieCard 
                        key={movie.imdbID} 
                        movie={movie} 
                        toggleFavorite={toggleFavorite} 
                        isFavorite={true} 
                    />
                ))
            ) : (
                <div className="empty">
                    <h2>No Favorite Movies</h2>
                </div>
            )}
        </div>
    );
};

export default Favorites;

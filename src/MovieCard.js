import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie, toggleFavorite, isFavorite }) => {
    const [trailerUrl, setTrailerUrl] = useState('');
    const apiKey = 'AIzaSyCEl5jrr-z7dLpqU5o8Trs9dxPbLpBrfhA';

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movie.Title)} trailer&type=video&key=${apiKey}`;
                const response = await fetch(searchUrl);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    setTrailerUrl(`https://www.youtube.com/watch?v=${videoId}`);
                } else {
                    setTrailerUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                }
            } catch (error) {
                console.error('Error fetching trailer:', error);
                setTrailerUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Fallback video
            }
        };

        fetchTrailer();
    }, [movie.Title, apiKey]);

    return (
        <div className="movie">
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                <FontAwesomeIcon 
                    icon={faHeart} 
                    className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
                    onClick={() => toggleFavorite(movie)} 
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3 className={isFavorite ? 'favorite-title' : ''}>{movie.Title}</h3>
                {trailerUrl && (
                    <a 
                        href={trailerUrl} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="watch-trailer-button"
                    >
                        Watch Trailer
                    </a>
                )}
            </div>
        </div>
    );
};

export default MovieCard;

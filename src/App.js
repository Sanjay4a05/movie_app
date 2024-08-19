import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import MovieCard from './MovieCard';
import './Nav.css';  
import Login from './Login';
import Signup from './Signup';
import Loading from './Loading';
import FavoritesPage from './Favorites';
import RatedMovies from './RatedMovies'; // Import RatedMovies component
import PeopleList from './PeopleList'; // Import PeopleList componen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null);  // Track logged-in user
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]); // State for favorites

    const searchMovies = async (title) => {
        setLoading(true);
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        if (data.Search) {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    const handleLogout = () => {
        setUser(null);
    };

    const toggleFavorite = (movie) => {
        const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <Router>
            <div className="app">
                <h1>Movie Streamer</h1>

                {user ? (
                    <div className="nav">
                        <div className="nav-buttons">
                            <Link to="/" className="nav-button">Home</Link>
                            <Link to="/favorites" className="nav-button">Favorites</Link>
                            <Link to="/people" className="nav-button">People</Link> {/* Link to People List */}
                            <Link to="/top-rated" className="nav-button">Top Rated Movies</Link> {/* Link to Top Rated Movies */}
                            <button className="nav-button" onClick={handleLogout}>Logout</button>
                        </div>
                        <span className="user-name">Welcome, {user.username}</span>
                    </div>
                ) : (
                    <div className="nav">
                        <Link to="/login" className="nav-button">Login</Link>
                        <Link to="/signup" className="nav-button">Signup</Link>
                    </div>
                )}

                {loading ? (
                    <Loading />
                ) : (
                    <Routes>
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/signup" element={<Signup />} />
                        
                        {/* If the user is not logged in, redirect them to the login page */}
                        {user ? (
                            <>
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <div className="search">
                                                <input
                                                    placeholder="Search for Movies"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                                <FontAwesomeIcon 
                                                    icon={faSearch} 
                                                    alt="search icon"
                                                    onClick={() => searchMovies(searchTerm)}
                                                />
                                            </div>

                                            {movies.length > 0 ? (
                                                <div className="container">
                                                    {movies.map((movie) => (
                                                        <MovieCard 
                                                            key={movie.imdbID} 
                                                            movie={movie} 
                                                            toggleFavorite={toggleFavorite} 
                                                            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)} // Pass favorite state
                                                            user={user} // Pass user state to MovieCard for handling alerts
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="empty">
                                                    <h2>No Movies found</h2>
                                                </div>
                                            )}
                                        </>
                                    }
                                />
                                <Route 
                                    path="/favorites" 
                                    element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />} 
                                />
                                <Route 
                                    path="/top-rated" 
                                    element={<RatedMovies />}  // Route for Top Rated Movies
                                />
                                <Route 
                                    path="/people" 
                                    element={<PeopleList />} // Route for People List
                                />
                                
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/login" />} />
                        )}
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;

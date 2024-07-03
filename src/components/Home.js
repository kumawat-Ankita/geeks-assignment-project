import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import './home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.post('https://hoblist.com/api/movieList', {
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting'
        })
            .then(response => {
                const sortedMovies = response.data.result.sort((a, b) => b.voting - a.voting);
                setMovies(sortedMovies);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Home</h1>
            <div className="card-container">
                {movies.map(movie => (
                    <div className="card" key={movie._id}>
                        <img src={movie.poster} alt={movie.title} height={300} width={300} />
                        <div className="card-content">
                            <div className="card-title">{movie.title}</div>
                            <div className="card-text">Director: {movie.director.join(', ')}</div>
                            <div className="card-text">Starring: {movie.stars.join(', ')}</div>
                            <div className="card-text">Language: {movie.language}</div>
                            <div className="card-text">Release Date: {movie.releasedDate}</div>
                            <div className="card-text">Votes: {movie.voting}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

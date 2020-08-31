import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  //Connect the api here

  useEffect(() => {
    //if the dependency blank [] that means run this code
    // once when the Results component load or mount
    //if we not declare dependency then everytime rerender
    //if we pass like [name] then once time and also if name change it rerender
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {movies.map(movie => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;

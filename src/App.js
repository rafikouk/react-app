import { useState } from 'react';
import './App.css';
import Filter from './component/Filter'
import MovieList from './component/MovieList'
import { movieData } from './Data';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  console.log(filterRating)
  return (
    <div className="">
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={movies} filterTitle={filterTitle} setMovies={setMovies} filterRating={filterRating} />
    </div>
  );
}

export default App;

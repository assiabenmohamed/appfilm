import { useState } from "react";
import MovieList from "./components/MovieList";
import MoviesForm from "./components/MoviesForm";
import { Films } from "./constants/films";
import MovieFilter from "./components/MovieFilter";

function App() {
  const [film, setfilm] = useState(Films);
  const [filter, setFilter] = useState({ title: "", minRating: 0 }); //Title:"", minRating: 0);
  function addMovie(newfilm) {
    setfilm([...film, newfilm]);
  }
  const filteredMovies = film.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.minRating,
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          <MovieFilter filter={filter} onFilterChange={setFilter} />
          Movie Collection
        </h1>
        <MoviesForm onAddMovie={addMovie} />
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
}

export default App;

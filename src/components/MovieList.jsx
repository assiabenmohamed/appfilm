import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;

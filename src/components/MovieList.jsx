import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router";

function MovieList(props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {props.movies.map((movie) => (
        <NavLink to={`/film/${movie.id}`} key={movie.id} className="block">
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default MovieList;

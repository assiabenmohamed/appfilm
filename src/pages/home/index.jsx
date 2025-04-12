import React, { useState } from "react";
import { Films } from "../../constants/films"; // Liste initiale de films
import MovieFilter from "../../components/MovieFilter"; // Composant pour filtrer les films
import MoviesForm from "../../components/MoviesForm"; // Composant pour ajouter un nouveau film
import MovieList from "../../components/MovieList"; // Composant pour afficher la liste des films

function Home() {
  // État contenant la liste des films (initialisé avec Films)
  const [film, setfilm] = useState(Films);

  // État pour le filtre (titre + note minimale)
  const [filter, setFilter] = useState({ title: "", minRating: 0 });

  // Fonction pour ajouter un nouveau film à la liste
  function addMovie(newfilm) {
    setfilm([...film, newfilm]); // On ajoute le nouveau film sans écraser les anciens
  }

  // Application des filtres : titre (en minuscules) et note minimale
  const filteredMovies = film.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.minRating
  );

  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold">
        {/* Composant de filtre : permet de filtrer par titre et note */}
        <MovieFilter filter={filter} onFilterChange={setFilter} />
        Movie Collection
      </h1>

      {/* Formulaire pour ajouter un nouveau film */}
      <MoviesForm onAddMovie={addMovie} />

      {/* Affichage de la liste des films filtrés */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home; // Export du composant principal

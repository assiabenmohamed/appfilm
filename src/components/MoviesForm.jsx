import React, { useRef, useState } from "react";

function MoviesForm({ onAddMovie }) {
  // Refs pour accéder aux valeurs des champs du formulaire
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const posterRef = useRef(null);
  const ratingRef = useRef(null);
  const directorRef = useRef(null);
  const trailerRef = useRef(null);
  const yearRef = useRef(null);

  // État pour gérer les erreurs de validation
  const [errors, setErrors] = useState({});

  // Fonction de validation des champs
  const validateForm = () => {
    const newErrors = {};

    // Validation du titre
    if (!titleRef.current.value.trim()) {
      newErrors.title = "Title is required";
    }

    // Validation du réalisateur
    if (!directorRef.current.value.trim()) {
      newErrors.director = "Director name is required";
    }

    // Validation de l'année
    const year = parseInt(yearRef.current.value);
    if (!yearRef.current.value.trim()) {
      newErrors.year = "Release year is required";
    } else if (
      isNaN(year) ||
      year < 1900 ||
      year > new Date().getFullYear() + 5
    ) {
      newErrors.year = `Year must be between 1900 and ${new Date().getFullYear() + 5}`;
    }

    // Validation de l'URL du poster
    if (!posterRef.current.value.trim()) {
      newErrors.poster = "Poster URL is required";
    } else {
      try {
        new URL(posterRef.current.value);
      } catch (e) {
        newErrors.poster = "Please enter a valid URL";
      }
    }

    // Validation de l'URL de la bande-annonce
    if (trailerRef.current.value.trim()) {
      try {
        new URL(trailerRef.current.value);
      } catch (e) {
        newErrors.trailer = "Please enter a valid URL";
      }
    }

    // Validation de la note
    const rating = parseFloat(ratingRef.current.value);
    if (!ratingRef.current.value.trim()) {
      newErrors.rating = "Rating is required";
    } else if (isNaN(rating) || rating < 0 || rating > 10) {
      newErrors.rating = "Rating must be between 0 and 10";
    }

    // Validation de la description
    if (!descRef.current.value.trim()) {
      newErrors.description = "Description is required";
    } else if (descRef.current.value.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault();

    // Valider le formulaire
    if (!validateForm()) {
      return;
    }

    // Création d'un nouvel objet film
    const newMovie = {
      id: Date.now(),
      title: titleRef.current.value,
      realisateur: directorRef.current.value,
      annee: yearRef.current.value,
      posterUrl: posterRef.current.value,
      rating: parseFloat(ratingRef.current.value),
      description: descRef.current.value,
      trailerUrl: trailerRef.current.value,
    };

    // Appel de la fonction pour ajouter le film
    onAddMovie(newMovie);

    // Réinitialiser le formulaire
    e.target.reset();
    titleRef.current.focus();
    setErrors({});
  }

  return (
    <div className="flex justify-center">
      <div className="mb-8 w-full max-w-2xl rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Add New Movie
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Movie Title *"
              ref={titleRef}
              className={`w-full rounded border p-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Director *"
              className={`w-full rounded border p-2 ${errors.director ? "border-red-500" : "border-gray-300"}`}
              ref={directorRef}
            />
            {errors.director && (
              <p className="mt-1 text-sm text-red-500">{errors.director}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Release Year *"
              className={`w-full rounded border p-2 ${errors.year ? "border-red-500" : "border-gray-300"}`}
              ref={yearRef}
              min="1900"
              max={new Date().getFullYear() + 5}
            />
            {errors.year && (
              <p className="mt-1 text-sm text-red-500">{errors.year}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Poster URL *"
              className={`w-full rounded border p-2 ${errors.poster ? "border-red-500" : "border-gray-300"}`}
              ref={posterRef}
            />
            {errors.poster && (
              <p className="mt-1 text-sm text-red-500">{errors.poster}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Trailer URL (optional)"
              className={`w-full rounded border p-2 ${errors.trailer ? "border-red-500" : "border-gray-300"}`}
              ref={trailerRef}
            />
            {errors.trailer && (
              <p className="mt-1 text-sm text-red-500">{errors.trailer}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Rating (0-10) *"
              ref={ratingRef}
              min="0"
              max="10"
              step="0.1"
              className={`w-full rounded border p-2 ${errors.rating ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.rating && (
              <p className="mt-1 text-sm text-red-500">{errors.rating}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Description *"
              className={`w-full rounded border p-2 ${errors.description ? "border-red-500" : "border-gray-300"}`}
              ref={descRef}
              rows="4"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#E91E63] p-2 text-white transition hover:bg-[#e91e62ce] focus:outline-none focus:ring-2 focus:ring-[#E91E63] "
          >
            Add Movie
          </button>
        </form>
        <p className="mt-2 text-sm text-gray-600">* Required fields</p>
      </div>
    </div>
  );
}

export default MoviesForm;

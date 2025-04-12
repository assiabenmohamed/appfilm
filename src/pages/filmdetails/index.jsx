import React from "react";
import { NavLink, useParams } from "react-router"; // Import pour la navigation et pour récupérer l'ID depuis l'URL

function FilmDetail({ films }) {
  // Récupération de l'identifiant du film dans l'URL
  const { id } = useParams();

  // Recherche du film correspondant dans la liste des films
  const film = films.find((film) => film.id === parseInt(id));

  // Si aucun film n'est trouvé, afficher un message d'erreur avec un bouton pour retourner à l'accueil
  if (!film) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Film non trouvé</h2>
        <NavLink
          to="/"
          className="rounded-md bg-[#E91E63] px-6 py-2 text-white transition-colors hover:bg-[#e91e62d3]"
        >
          Retour à l'accueil
        </NavLink>
      </div>
    );
  }

  // Si le film est trouvé, afficher ses détails
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Titre du film + bouton retour */}
      <div className="mb-8 flex flex-col items-start justify-between border-b border-gray-200 pb-4 md:flex-row md:items-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:mb-0">
          {film.titre}
        </h1>
        <NavLink
          to="/"
          className="rounded-md bg-[#E91E63] px-4 py-2 text-white transition-colors hover:bg-[#e91e62d3]"
        >
          Retour à l'accueil
        </NavLink>
      </div>

      {/* Section avec image + infos principales */}
      <div className="mb-10 flex flex-col gap-8 lg:flex-row">
        {/* Affichage de l'image du film */}
        <div className="lg:w-1/3">
          <img
            src={film.image}
            alt={film.titre}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Détails du film : réalisateur, année, description */}
        <div className="lg:w-2/3">
          <p className="mb-3 text-lg">
            <span className="font-semibold">Réalisateur:</span>{" "}
            {film.realisateur}
          </p>
          <p className="mb-5 text-lg">
            <span className="font-semibold">Année:</span> {film.annee}
          </p>
          <div className="mt-6">
            <h3 className="mb-4 border-b border-gray-200 pb-2 text-xl font-semibold">
              Description
            </h3>
            <p className="leading-relaxed text-gray-700">{film.description}</p>
          </div>
        </div>
      </div>

      {/* Bande-annonce (iframe) */}
      <div className="mt-8">
        <h3 className="mb-6 border-b border-gray-200 pb-2 text-xl font-semibold">
          Bande-annonce
        </h3>
        <div className="aspect-w-16 aspect-h-9 flex justify-center">
          <iframe
            className="h-96 w-full max-w-4xl rounded-lg shadow-md"
            src={film.trailerUrl}
            title={`Bande-annonce de ${film.titre}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail; // Exportation du composant FilmDetail

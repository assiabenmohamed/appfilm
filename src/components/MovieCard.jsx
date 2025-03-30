import React from "react";

function MovieCard({ title, description, posterUrl, rating }) {
  console.log(title, description, posterUrl, rating);
  return (
    <div>
      <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition hover:scale-105">
        <img src={posterUrl} alt={title} className="h-64 w-full object-cover" />
        <div className="p-4">
          <h2 className="mb-2 text-xl font-bold">{title}</h2>
          <p className="mb-4 text-gray-600">{description}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#E91E63]">
              Rating: {rating}/10
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E91E63] text-white">
              {rating.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

import React from "react";

function MovieFilter({ filter, onFilterChange }) {
  return (
    <div>
      <div className="mb-8 flex space-x-4 rounded-lg bg-gray-100 p-6">
        <input
          type="text"
          placeholder="Filter by title"
          value={filter.title}
          onChange={(e) => onFilterChange({ ...filter, title: e.target.value })}
          className="flex-grow rounded border p-2"
        />
        <input
          type="number"
          placeholder="Min Rating"
          min="0"
          max="10"
          value={filter.minRating}
          onChange={(e) =>
            onFilterChange({
              ...filter,
              minRating: parseFloat(e.target.value) || 0,
            })
          }
          className="w-24 rounded border p-2"
        />
      </div>
    </div>
  );
}

export default MovieFilter;

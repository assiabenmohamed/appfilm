import React, { useRef } from "react";

function MoviesForm({ onAddMovie }) {
  const TitleRef = useRef(null);
  const DesRef = useRef(null);
  const postRef = useRef(null);
  const RatRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // nameRef.current.focus();
    console.log("Form submitted");

    const newfilm = {
      id: Date.now(),
      title: TitleRef.current.value,
      description: DesRef.current.value,
      posterUrl: postRef.current.value,
      rating: parseFloat(RatRef.current.value),
    };
    onAddMovie(newfilm);
  }
  return (
    <div className="flex justify-center">
      <div className="mb-8 w-[50vw] rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Add New Movie</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Movie Title"
            ref={TitleRef}
            className="w-full rounded border p-2"
          />
          <textarea
            placeholder="Description"
            className="w-full rounded border p-2"
            ref={DesRef}
          />
          <input
            type="text"
            placeholder="Poster URL"
            className="w-full rounded border p-2"
            ref={postRef}
          />
          <input
            type="number"
            placeholder="Rating (0-10)"
            ref={RatRef}
            min="0"
            max="10"
            step="0.1"
            className="w-full rounded border p-2"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full rounded bg-blue-500 p-2 text-white transition hover:bg-blue-600"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}

export default MoviesForm;

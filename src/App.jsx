import { Route, Routes } from "react-router";
import { Films } from "./constants/films";
import Home from "./pages/home";
import FilmDetail from "./pages/filmdetails";


function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmDetail films={Films} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

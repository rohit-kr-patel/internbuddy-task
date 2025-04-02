import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async () => {
    if (!search) return;
    try {
      const response = await axios.get(`${API_URL}?s=${search}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">🎥 Movie Search App</h1>
      <div className="w-full max-w-md flex items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={searchMovies}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => fetchMovieDetails(movie.imdbID)}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-64  rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">
              {movie.Title} ({movie.Year})
            </h3>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="fixed  inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
         style={{
    backgroundImage: `url(${selectedMovie.Poster})`,
    backgroundSize: "fill",
    backgroundPosition: "center",
  }}
        >
          <div className="bg-gray-800 p-6 rounded-md shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedMovie.Title}</h2>
            <p className="mb-2">
              <strong>Plot:</strong> {selectedMovie.Plot}
            </p>
            <p className="mb-4">
              <strong>Actors:</strong> {selectedMovie.Actors}
            </p>
            <button
              onClick={() => setSelectedMovie(null)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
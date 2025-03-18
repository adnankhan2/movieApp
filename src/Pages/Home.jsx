//// this will be pretty much everything to display on home page including navbar, movie posters search functions etc
import "../Css/Home.css";
import { useState, useEffect } from "react";
import Moviecard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // here we use useeffect hook to load popular movies based on functions defined in api.js file
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  // function to search movies using searchmovies function defined in api.js files
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="Home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="onSubmit">
          Submit
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          // movie.title.toLowerCase().startsWith(searchQuery) &&
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;

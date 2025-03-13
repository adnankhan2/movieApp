import "../Css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const movies = [
    {
      id: "1",
      title: "John Wick",
      release_date: "2018",
    },
    {
      id: "2",
      title: "The Loneranger",
      release_date: "2014",
    },
    {
      id: "3",
      title: "BraveHeart",
      release_date: "1998",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuerry("");
  };
  return (
    <div className="home">
      {" "}
      <form action="" className="search-form">
        <input
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search for Movies.."
        />
        <button type="submit" className="search-input" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          // movie.title.toLowerCase().startsWith(searchQuerry) &&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;

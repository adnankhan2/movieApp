import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

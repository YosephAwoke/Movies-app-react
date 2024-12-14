import { Route, Routes } from "react-router-dom";
import "./css/App.css";
// import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          {/* <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

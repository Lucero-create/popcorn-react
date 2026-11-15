import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import MovieCard from "./pages/MovieCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ Movies" exact render={<Movies movies={Movies} />} />
          <Route
            path="/movies/:id"
            render={() => <MovieCard movies={Movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

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
        <div className="app-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:id" element={<MovieCard />} />
         
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
      <Landing />
      <Movies />
    </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;

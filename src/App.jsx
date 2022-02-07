import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components";
import { AppRoutes } from "./routes/Routes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Coderscamp</h1>
        <AppRoutes />

        <Footer />
      </Router>
    </div>
  );
}

export default App;

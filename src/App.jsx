import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

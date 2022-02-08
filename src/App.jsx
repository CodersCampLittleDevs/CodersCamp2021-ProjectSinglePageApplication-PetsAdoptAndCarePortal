import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components";
import { AppRoutes } from "./routes/Routes";
import { StepByStepList } from "./components/Steplist/StepList";
import { Footer } from "./components/Footer/Footer";

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

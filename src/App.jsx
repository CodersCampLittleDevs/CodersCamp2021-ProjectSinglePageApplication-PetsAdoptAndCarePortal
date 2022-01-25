import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AppRoutes } from "./routes/Routes";
import { Footer } from "./components/footer";
import { StepByStepList } from "./components/Steplist/StepList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Coderscamp</h1>
        <AppRoutes />
        <StepByStepList />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

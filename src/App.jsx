import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AppRoutes } from "./routes/Routes";
import { StepByStepList } from "./components/Steplist/StepList";
import { OpinionsSection } from "./components/CustomerOpinions/OpinionsSection/OpinionsSection";
import { Footer } from "./components/Footer/footer";
import { ServicesList } from "./components/ServicesList/ServicesList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Coderscamp</h1>
        <AppRoutes />
        <ServicesList />
        <StepByStepList />
        <OpinionsSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { HashRouter } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

import { AppRoutes } from "./routes/Routes";
import { OpinionsSection } from "./components/CustomerOpinions/OpinionsSection/OpinionsSection";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <h1>Coderscamp</h1>
      <AppRoutes />
      <OpinionsSection />
      <Footer />
    </div>
  );
}

export default App;

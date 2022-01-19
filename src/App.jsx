import { AppRoutes } from "./routes/Routes";
import { Footer } from "./components/footer";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <h1>Coderscamp</h1>
      <AppRoutes />
      <Button />
      <Footer />
    </div>
  );
}

export default App;

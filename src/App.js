import GameAnimals from "./components/gameanimals";
import GameBarbie from "./components/gamebarbie";
import GameGames from "./components/gamegames";
import GameHero from "./components/gamehero";
import SelectTheme from "./components/select-theme";
import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<SelectTheme />} />
        <Route path="/game" element={<GameGames />} />
        <Route path="/hero" element={<GameHero />} />
        <Route path="/animals" element={<GameAnimals />} />
        <Route path="/barbie" element={<GameBarbie />} />
        {/* Catch-all route for the root path */}
        <Route path="/*" element={<SelectTheme />} />
      </Routes>
    </Router>
  );
}

export default App;

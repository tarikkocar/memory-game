import { useState } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

function App() {
  const [streak, setStreak] = useState([]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[100rem] min-h-screen">
      <Header streak={streak} />
      <CardGrid streak={streak} setStreak={setStreak} />
      <GameOver streak={streak} setStreak={setStreak} />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import GameOver from "./components/GameOver";

function App() {
  const [streak, setStreak] = useState([]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[100rem]">
      <Header streak={streak} />
      <CardGrid streak={streak} setStreak={setStreak} />
      {streak.length === 12 && <GameOver setStreak={setStreak} />}
    </div>
  );
}

export default App;

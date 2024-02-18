import { useEffect, useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Podium from "./components/Podium"
import AllGames from "./components/AllGames"

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.log(err));
  }, []);
  if(games.length != 0){
  return (
    <div className="h-screen">
      <Header />
      <Podium games={games} />
      <AllGames games={games} />
    </div>
  );
}
}

export default App;

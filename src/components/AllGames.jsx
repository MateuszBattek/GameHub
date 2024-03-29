import React, { useState } from "react"
import GameBox from "./GameBox"
import GamesList from "./GamesList"

export default function AllGames(props) {
  const [active, setActive] = useState(1)

  return (
    <div className="text-white my-60 flex lg:flex-row flex-col h-3/4 justify-evenly">
      <GamesList games={props.games} setActive={setActive} size={props.size} />
      <GameBox game={props.games.find((game) => game.key == active)} />
    </div>
  )
}

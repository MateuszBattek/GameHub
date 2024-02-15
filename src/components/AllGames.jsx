import React, { useState } from "react"
import GameBox from "./GameBox"
import GamesList from "./GamesList"

export default function AllGames(props) {
  const [active, setActive] = useState(0)
  return (
    <div className="text-white py-20 m-28 flex h-full">
      <GamesList games={props.games} setActive={setActive} />
      <GameBox game={props.games.find((game) => game.key == active)} />
    </div>
  )
}

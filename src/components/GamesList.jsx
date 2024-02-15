import React from "react"
import GamesListElement from "./GamesListElement"

export default function GamesList(props) {
  props.games.sort((a, b) => b.rate - a.rate)
  const allGames = props.games.map((game) => (
    <GamesListElement game={game} setActive={props.setActive} key={game.key} />
  ))

  return (
    <div className="flex flex-col self-start items-center lg:justify-start justify-center w-full lg:w-5/12 px-12">
      {allGames}
    </div>
  )
}

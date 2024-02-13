import React from "react"

export default function GamesListElement(props) {
  return (
    <div className="flex justify-left items-center h-24 w-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 rounded">
      <img
        width="80"
        src={"./src/assets/" + props.game.name + ".jpg"}
        alt="Zdjęcie gry"
        className="h-full p-1 rounded-lg"
      />
      <div className="h-full w-3/4 p-2">
        <h2 className="font-bold flex items-center h-1/2 ">
          {props.game.name}
        </h2>
        <p className="flex items-center h-1/2 ">{props.game.author}</p>
      </div>
      <p className="font-bold">{props.game.rate} / 10</p>
    </div>
  )
}

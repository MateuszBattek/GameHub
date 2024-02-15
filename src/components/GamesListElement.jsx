import React from "react"

export default function GamesListElement(props) {
  return (
    <div
      className="transition-all duration-200 ease-in flex justify-start items-center h-24 w-full bg-gradient-to-r from-sky-500 to-indigo-500 mb-4 rounded cursor-pointer opacity-90 hover:opacity-100"
      onClick={() => props.setActive(props.game.key)}
    >
      <img
        width="80"
        src={"./src/assets/" + props.game.name + ".jpg"}
        alt="Zdjęcie gry"
        className="h-full p-1 rounded-lg"
      />
      <div className="h-full p-2 lg:w-1/2">
        <h2 className="font-bold flex items-center h-1/2 ">
          {props.game.name}
        </h2>
        <p className="flex items-center h-1/2 ">{props.game.author}</p>
      </div>
      <p className="font-bold p-3 ml-auto ">{props.game.rate} / 10</p>
    </div>
  )
}

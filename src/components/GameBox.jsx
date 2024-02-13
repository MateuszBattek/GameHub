import React from "react"

export default function GameBox(props) {
  return (
    <div className="flex flex-col items-start justify-center w-5/12 mx-auto p-12">
      <iframe
        width="560"
        height="315"
        src={props.game.link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-row w-11/12">
        <div className="flex flex-col w-1/2">
          <h3 className="p-2 font-bold text-2xl">{props.game.name}</h3>
          <h3 className="px-2 font-bold ">{props.game.author}</h3>
        </div>
        <p className="p-2 flex w-1/2 justify-end font-bold">
          {props.game.rate}/10
        </p>
      </div>
      <p className="p-2">{props.game.desc}</p>
    </div>
  )
}

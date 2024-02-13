import React from "react"

export default function GameBox(props) {
  const oneListElement = props.games[0]
  const link = (
    <div className="flex flex-col items-start justify-center w-5/12 mx-auto p-12">
      <iframe
        className=" rounded"
        width="560"
        height="315"
        src={oneListElement.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="flex flex-row w-11/12">
        <div className="flex flex-col w-1/2">
          <h3 className="p-2 font-bold text-2xl">{oneListElement.name}</h3>
          <h3 className="px-2 font-bold ">{oneListElement.author}</h3>
        </div>
        <p className="p-2 flex w-1/2 justify-end font-bold">
          {oneListElement.rate}/10
        </p>
      </div>
      <p className="p-2">{oneListElement.desc}</p>
    </div>
  )
  return <>{link}</>
}

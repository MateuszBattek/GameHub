import React from "react"

export default function PodiumElement(props) {
  console.log(props.height)
  return (
    <div className="scale-125">
      <div className={"bg-black w-72 h-" + props.height}></div>
      <div className="relative h-14">
        <div className="absolute top-0 left-0 text-lg font-bold">Tytuł gry</div>
        <div className="absolute top-0 right-0">Ocena</div>
        <div className="absolute bottom-0 left-0 px-1">Twórca gry</div>
      </div>
    </div>
  )
}

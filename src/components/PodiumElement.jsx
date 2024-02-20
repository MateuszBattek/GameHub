import React from "react"
export default function PodiumElement(props) {
  const scale = props.isPrimary ? "" : "scale-90"
  const img = `./src/assets/${props.game.name}.jpg`
  const primaryDiv = `p-2 flex items-end justify-center shadow-sm rounded w-3/4 aspect-[9/16] object-fill ${scale} bg-center bg-cover`
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className={primaryDiv} style={{ backgroundImage: `url('${img}')` }}>
        {/* <img src={img} className="h-auto w-full rounded" /> */}
        <div className="shadow-lg bg-opacity-50 bg-black flex flex-row rounded w-full justify-center p-2">
          <div className="flex flex-col w-1/2">
            <div className="text-lg font-bold">{props.game.name}</div>
            <div className="px-0.5">{props.game.author}</div>
          </div>
          <div className="flex flex-col items-end w-1/2 font-bold">
            {props.game.rate} / 10
          </div>
        </div>
      </div>
    </div>
  )
}

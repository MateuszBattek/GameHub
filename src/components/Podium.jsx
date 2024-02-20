import React from "react"
import PodiumElement from "./PodiumElement"

export default function Podium(props) {
  if (props.size == "lg") {
    return (
      <div className="text-white mb-20 flex flex-row justify-between items-center h-3/4">
        <PodiumElement game={props.games[1]} />
        <PodiumElement isPrimary={true} game={props.games[0]} />
        <PodiumElement game={props.games[2]} />
      </div>
    )
  } else {
    return (
      <div className="text-white mb-20 flex flex-row justify-between items-center h-3/4">
        <PodiumElement isPrimary={true} game={props.games[0]} />
      </div>
    )
  }
}
PodiumElement.defaultProps = {
  isPrimary: false,
}

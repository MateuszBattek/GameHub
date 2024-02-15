import React from "react"
import PodiumElement from "./PodiumElement"

export default function Podium(props) {
  return (
    <div className="text-white mb-20 flex flex-row justify-between items-center h-3/4">
      <PodiumElement />
      <PodiumElement isPrimary={true} />
      <PodiumElement />
    </div>
  )
}
PodiumElement.defaultProps = {
  isPrimary: false,
}

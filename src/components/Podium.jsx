import React from "react"
import PodiumElement from "./PodiumElement"

export default function Podium() {
  return (
    <div className="text-white py-20 mx-48 flex flex-row justify-between items-center">
      <PodiumElement height={80} />
      <PodiumElement height={96} />
      <PodiumElement height={80} />
    </div>
  )
}

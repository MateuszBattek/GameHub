import React from "react"
import PodiumElement from "./PodiumElement"

export default function Podium() {
  return (
    <div className="text-white h-3/4 py-20 mx-48 flex flex-row justify-between items-center">
      <PodiumElement scale={"4/5"} />
      <PodiumElement scale={"full"} />
      <PodiumElement scale={"4/5"} />
    </div>
  )
}

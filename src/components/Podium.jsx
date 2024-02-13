import React from "react"
import PodiumElement from "./PodiumElement"

export default function Podium() {
  return (
    <div className="text-white py-20 mx-48 flex flex-row justify-between items-center h-3/4">
      {/* <PodiumElement  width={'3/5'} height={'4/6'} py={1}/> */}
      <PodiumElement />
      <PodiumElement isPrimary={true}/>
      <PodiumElement />
      {/* <PodiumElement  width={'3/5'} height={'4/6'} py={1}/> */}
    </div>
  )
}
PodiumElement.defaultProps = {
  isPrimary: false,
}



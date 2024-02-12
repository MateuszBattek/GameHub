import React from "react"

const PodiumElement = (props) => {
  const dynamicClass = `p-2 flex items-end justify-center shadow-sm rounded bg-gradient-to-r from-sky-500 to-indigo-500 w-4/5 h-full cursor-pointer`

  return (
    <div className="h-full w-full flex justify-center">
      <div className={dynamicClass}>
        <div
          className={
            " shadow-lg bg-opacity-50 bg-black flex flex-row rounded w-full justify-center px-2 py-3"
          }
        >
          <div className="flex flex-col w-1/2">
            <div className="text-lg font-bold">Tytuł gry</div>
            <div className="px-0.5">{props.scale}</div>
          </div>
          <div className="flex flex-col items-end w-1/2">Ocena</div>
        </div>
      </div>
    </div>
  )
}

export default PodiumElement

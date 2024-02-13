import React from "react"
export default function PodiumElement(props) {
  const primaryDiv = " p-2 flex items-end w-3/4 justify-center shadow-sm rounded bg-gradient-to-r from-sky-500 to-indigo-500 w-4/5 h-full" 
  const notPrimaryDiv = "p-2 flex items-end w-3/4 justify-center shadow-sm rounded bg-gradient-to-r from-sky-500 to-indigo-500 w-4/5 h-full scale-90" 
  return (
  <div className="h-full w-full flex items-center justify-center flex-col">
      <div className={props.isPrimary  ? primaryDiv : notPrimaryDiv }> 
      <div className={" shadow-lg opacity-50 bg-black flex flex-row rounded w-full justify-center p-2 py-" + props.py}>
        <div className="flex flex-col w-1/2">
          <div className="text-lg font-bold">Tytuł gry</div>
          <div className="px-0.5">Twórca gry</div>
        </div>
        <div className="flex flex-col items-end w-1/2">Ocena</div>
      </div>
      </div>
    </div>
  )
  
}


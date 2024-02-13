import React from 'react'
const gry = [
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 1 },
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 2 },
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 4 },
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 6 },
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 3 },
  { nazwa: 'Tytuł gry', tworca: 'Twórca gry', ocena: 9 },
]
export default function AllGames() {
  let gryCount = gry.length;
  let rightDivHeight = gryCount * 96 + gryCount * 16 - 4;
  gry.sort((a,b) => b.ocena - a.ocena)
  const allGames = gry.map((gra) => (
    <div className='flex justify-left items-center h-24 w-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 rounded'>
      <img src='./src/assets/gra.jpg' alt="Zdjęcie gry" className='h-full p-1 rounded-lg' />
      <div className='h-full w-3/4 p-2'>
      <h2 className='font-bold flex items-center h-1/2 '>{gra.nazwa}</h2>
      <p className='flex items-center h-1/2 '>{gra.tworca}</p>
      </div>
      <p className='font-bold'>{gra.ocena} / 10</p>
    </div>
  ))

  return (
    <div className="text-white py-20 m-28 flex items-center">
      <div className='flex flex-col items-center justify-start w-5/12 mx-auto'> 
      {allGames}
      </div>
       <div style={{height: rightDivHeight}} className={"flex flex-row items-center w-5/12 bg-white  mx-auto"}>
      {/* <div className={"flex flex-row items-center w-5/12 h-[" + rightDivHeight + "px] bg-white  mx-auto"}> */}
      </div>
    </div>
  )
}
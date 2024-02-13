import React from 'react'
import MoreAboutGame from './MoreAboutGame';
const gry = [
  { nazwa: 'Cyberpunk', tworca: 'CDProject RED', ocena: 9 },
  { nazwa: 'Wiedźmin 3', tworca: 'CDProject RED', ocena: 9 },
  { nazwa: 'Tomb Raider', tworca: 'Square Enix', ocena: 4 },
  { nazwa: 'A Plague Tale Innocence', tworca: 'Asobo Studio', ocena: 6 },
 
]
export default function AllGames() {
  gry.sort((a,b) => b.ocena - a.ocena)
  const allGames = gry.map((gra) => (
    <div className='flex justify-left items-center h-24 w-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 rounded'>
      <img width="80" src={"./src/assets/" + gra.nazwa + ".jpg"} alt="Zdjęcie gry" className='h-full p-1 rounded-lg' />
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
      <MoreAboutGame/>
    </div>
  )
}
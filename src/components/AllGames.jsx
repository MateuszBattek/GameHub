import React, { useState } from "react"
import GameBox from "./GameBox"
import GamesList from "./GamesList"

const games = [
  {
    key: 0,
    name: "Cyberpunk",
    link: "https://www.youtube.com/embed/kfX9n_G0N2Y?si=7p3D8ZgK3fKUAKE4",
    desc: "Cyberpunk 2077 to rozgrywająca się w otwartym świecie przygoda, której akcja toczy się w Night City, megalopolis rządzonym przez obsesyjną pogoń za władzą, sławą i przerabianiem własnego ciała. Nazywasz się V i musisz zdobyć jedyny w swoim rodzaju implant — klucz do nieśmiertelności.",
    author: "CDProject RED",
    rate: 9,
  },
  {
    key: 1,
    name: "Wiedźmin 3",
    link: "https://www.youtube.com/embed/WY5Sw4oa-kk?si=QxJnX3Jk0dYMSRuJ",
    desc: "Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.",
    author: "CDProject RED",
    rate: 9,
  },
  {
    key: 2,
    name: "A Plague Tale Innocence",
    link: "https://www.youtube.com/embed/H4FOb16Nenk?si=yo5JDrdOkJWF3DLy",
    desc: "Przygodowa gra akcji z elementami skradanki. W A Plague Tale: Innocence gracze trafiają do XIV-wiecznej Francji opanowanej przez czarną śmierć. Amicia i jej pięcioletni brat Hugo starają się przetrwać i umknąć Inkwizycji, która podąża śladem chłopca.",
    author: "Asobo Studio",
    rate: 6,
  },
  {
    key: 3,
    name: "Tomb Raider",
    link: "https://www.youtube.com/embed/zF9m91y8Na0?si=Nz7P3Orx5onpM_ID",
    desc: "Dziesiąta odsłona przygód Lary Croft, stanowiąca zarazem reboot serii przygodowych gier akcji Tomb Raider. Dewelopingiem tytułu zajęło się studio Crystal Dynamics przy wsparciu firmy Eidos Montreal.",
    author: "Square Enix",
    rate: 4,
  },
]
export default function AllGames() {
  const [active, setActive] = useState(0)
  return (
    <div className="text-white py-20 m-28 flex h-full">
      <GamesList games={games} setActive={setActive} />
      <GameBox game={games.find((game) => game.key == active)} />
    </div>
  )
}

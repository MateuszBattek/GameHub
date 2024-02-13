import React from 'react'
const moreAboutGame = [
    {   nazwa: 'Cyberpunk', 
        link: 'https://www.youtube.com/embed/kfX9n_G0N2Y?si=7p3D8ZgK3fKUAKE4', 
        opis:'Cyberpunk 2077 to rozgrywająca się w otwartym świecie przygoda, której akcja toczy się w Night City, megalopolis rządzonym przez obsesyjną pogoń za władzą, sławą i przerabianiem własnego ciała. Nazywasz się V i musisz zdobyć jedyny w swoim rodzaju implant — klucz do nieśmiertelności.',
        tworca: 'CDProject RED', 
        ocena: 9},
    {   nazwa: 'Wiedźmin 3', 
        link: 'https://www.youtube.com/embed/WY5Sw4oa-kk?si=QxJnX3Jk0dYMSRuJ', 
        opis:'Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.',
        tworca: 'CDProject RED', 
        ocena: 9},
    {   nazwa: 'A Plague Tale Innocence', 
        link: 'https://www.youtube.com/embed/H4FOb16Nenk?si=yo5JDrdOkJWF3DLy', 
        opis:'Przygodowa gra akcji z elementami skradanki. W A Plague Tale: Innocence gracze trafiają do XIV-wiecznej Francji opanowanej przez czarną śmierć. Amicia i jej pięcioletni brat Hugo starają się przetrwać i umknąć Inkwizycji, która podąża śladem chłopca.',
        tworca: 'Asobo Studio', 
        ocena: 6},
    {   nazwa: 'Tomb Raider', 
        link: 'https://www.youtube.com/embed/zF9m91y8Na0?si=Nz7P3Orx5onpM_ID', 
        opis:'Dziesiąta odsłona przygód Lary Croft, stanowiąca zarazem reboot serii przygodowych gier akcji Tomb Raider. Dewelopingiem tytułu zajęło się studio Crystal Dynamics przy wsparciu firmy Eidos Montreal.',
        tworca: 'Square Enix', 
        ocena: 4},
    ]
export default function MoreAboutGame(props) {
    let oneListElement = moreAboutGame[0];
    console.log(oneListElement)
    const link =  (
        <div className={" flex flex-col items-start justify-center w-5/12   mx-auto p-12"}>
        <iframe className=" rounded"width="560" height="315" src= {oneListElement.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='flex flex-row w-11/12'>
            <div className='flex flex-col w-1/2'>
                <h3 className="p-2 font-bold text-2xl">{oneListElement.nazwa}</h3>
                <h3 className="px-2 font-bold ">{oneListElement.tworca}</h3>
            </div>
            <p className='p-2 flex w-1/2 justify-end font-bold'>{oneListElement.ocena}/10</p>
        </div>
        <p className="p-2">{oneListElement.opis}</p>
        </div>
       )
  return (
    <>
    {link}
    </>
  )
}

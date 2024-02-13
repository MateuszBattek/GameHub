import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Podium from "./components/Podium"
import AllGames from "./components/AllGames"

function App() {
  return (
    <div className="h-screen ">
      <Header />
      <Podium />
      <AllGames/>
    </div>
  )
}

export default App

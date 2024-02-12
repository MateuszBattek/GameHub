import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Podium from "./components/Podium"

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Podium />
    </div>
  )
}

export default App

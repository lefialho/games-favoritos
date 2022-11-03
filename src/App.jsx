import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './Components/Header'
import { Tabela } from './Components/Tabela'

function App() {
  return (
    <div className="App">
      <Header />
      <Tabela />
    </div>
  )
}

export default App

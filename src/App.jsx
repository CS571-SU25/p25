import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Players from './components/Players'
import Home from './components/Home'
import Header from './components/Header'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Stats from './components/Stats'
import Jerseys from './components/Jerseys'

function App() {
  return <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/player-info" element={<Players/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      <Route path="/tickets" element={<Tickets/>}></Route>
      <Route path="/stats" element={<Stats/>}></Route>
      <Route path="/jerseys" element={<Jerseys/>}></Route>
    </Routes>
  </HashRouter>
}

export default App

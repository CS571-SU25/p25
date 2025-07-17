import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Players from './components/Players'
import Home from './components/Home'
import Header from './components/Header'
import Schedule from './components/Schedule'

function App() {
  return <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/player-info" element={<Players/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
    </Routes>
  </HashRouter>
}

export default App

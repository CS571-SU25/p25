import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import Players from './components/Players';
import Home from './components/Home';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';
import Roster from './components/Roster';
import Jerseys from './components/Jerseys';
import TicketInfo from './components/TicketInfo';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Coaches from './components/Coaches';
import CartHook from './hooks/CartHook';

function App() {

  const { cart, addToCart, clearCart, removeFromCart } = CartHook();

  return <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/player-info" element={<Players/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      <Route path="/tickets" element={<Tickets/>}></Route>
      <Route path="/roster" element={<Roster/>}></Route>
      <Route path="/jerseys/:name" element={<Jerseys addToCart={addToCart}/>}></Route>
      <Route path="/coaches" element={<Coaches/>}></Route>
      <Route path="/tickets/info/:opponent/:date/:price" element={<TicketInfo addToCart={addToCart}/>}></Route>
      <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart}/>}></Route>
      <Route path="/checkout" element={<Checkout clearCart={clearCart}/>}></Route>
    </Routes>
  </HashRouter>
}

export default App

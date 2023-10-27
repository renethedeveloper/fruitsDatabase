import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits/index.jsx'
import CreateFruits from './pages/createFruits'
import CreateVeggies from './pages/CreateVeggies'
import Veggies from './pages/Veggies'


function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create Fruit</button>
        </Link>
        <Link to="/Veggies">
          <button>Veggies</button>
        </Link>
        <Link to="/CreateVeggies">
          <button>Create Veggies</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/Veggies" element={<Veggies />}></Route>
        <Route path="/CreateVeggies" element={<CreateVeggies />}></Route>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/create" element={<CreateFruits />}></Route>
      </Routes>
    </div>
  )
}

export default App
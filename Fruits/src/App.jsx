import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits/index.jsx'
import CreateFruits from './pages/createFruits'


function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/create" element={<CreateFruits />}></Route>
      </Routes>
    </div>
  )
}

export default App
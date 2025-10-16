import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './Components/Home';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
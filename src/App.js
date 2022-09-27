import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets'

const App = () => {
  return (
   <Router>
     <Header />
     <Routes>
      <Route path="/" element={<Rockets />} />
      </Routes>
   </Router>
  )
}

export default App;
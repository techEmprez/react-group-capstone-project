import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import RocketContainer from './Components/Rocket/RocketContainer';


const App = () => {
  return (
    <div>
    <NavLink />
      <Routes>
        <Route exact path="/" element={<RocketContainer />} />
      </Routes>  
    </div>
  )
}

export default App;

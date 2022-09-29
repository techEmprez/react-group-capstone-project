import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import RocketContainer from './components/Rockets/RocketContainer';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route exact path="/" element={<RocketContainer />} />
      </Routes>
    </>
  );
}

export default App;

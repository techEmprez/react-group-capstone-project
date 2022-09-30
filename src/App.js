import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Missions/Header';
import Missions from './components/Missions/Missions';
import MyProfile from './components/Missions/MyProfile';
import RocketContainer from './components/Rockets/RocketContainer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<RocketContainer />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

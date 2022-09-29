import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Missions/Header';
import Rockets from './components/Missions/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/Missions/MyProfile';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;

import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './containers/Header';
import Home from './containers/Home';
import GuideTimes from './containers/GuideTimes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/availableTimes" element={<GuideTimes />} />
      </Routes>
    </div>
  );
}

export default App;

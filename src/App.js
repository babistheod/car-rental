import React from 'react';
import './App.css';

import Home from './pages/Home';
import Cars from './pages/Cars';
import SingleCar from './pages/SingleCar';
import Error from './pages/Error';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:slug" element={<SingleCar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
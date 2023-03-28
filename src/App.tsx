import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Főoldal from './fooldal';
import Tapasztalat from './tapasztalat';
import Idopont from './idopont';
import Nav from './nav';
import Footer from './foooter';

function App() {
  return (
      <><Nav /><Routes>
      <Route path="/" element={<Főoldal />}></Route>
      <Route path="/tapasztalat" element={<Tapasztalat />}></Route>
      <Route path="/idopont" element={<Idopont />}></Route>
    </Routes><Footer /></>
  );
}

export default App;

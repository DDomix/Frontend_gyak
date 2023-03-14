import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Főoldal from './fooldal';
import Bemutatkozas from './bemutatkozas';
import Kapcsolat from './kapcsolat';
import Nav from './nav';
import Footer from './foooter';

function App() {
  return (
      <><Nav /><Routes>
      <Route path="/" element={<Főoldal />}></Route>
      <Route path="/bemutatkozas" element={<Bemutatkozas />}></Route>
      <Route path="/kapcsolat" element={<Kapcsolat />}></Route>
    </Routes><Footer /></>
  );
}

export default App;

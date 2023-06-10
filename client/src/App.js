import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Components/Nav/nav';
import Cards from './Components/Cards/cards';
import Bienvenida from './Components/Bienvenida/bienvenida';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [country, setCountry] = useState([])

  function onSearch(country) {
    axios(`http://localhost:3001/countries/name?name=${data}`)
      .then((response) => response.json())
      .then((data) => { setCountry((data) => [...country, data]) })
  };

  function onClose(id) {
    setCountry(countries.filter((element) => element.id !== id));
  }

  if (location.pathname === '/') {
    <Routes>
      <Route path='/' element={<Bienvenida />} />
    </Routes>
  } else {
    return (
      <div>
        <Nav onSearch={onSearch} />
        <Routes>
          <Route exact path="/" element={<Bienvenida />} />

          <Route exact path="/home" element={<Cards country={characters} onClose={onClose} />} />


          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Outlet /> */}
      </div>
    );

  }
}

export default App;

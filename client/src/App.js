import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar/searchBar';
import Cards from './Components/Cards/cards'


function App() {

  const [country, setCountry] = useState([])

  async function onSearch(country) {
    console.log(country);
    fetch(`http://localhost:3001/countries/name?name=${country}`)

      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setCountry([...data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      });

    // .then((response) => response.json())
    // .then((country) => { setCountry((country) => [...country, country]) })
  };


  // function onClose(id) {
  //   setCountry(countries.filter((element) => element.id !== id));
  // }
  return (
    <div style={{ padding: '25px' }}>
      <SearchBar onSearch={onSearch} />
      <Cards datos={country} />
    </div>
  )
}

export default App;

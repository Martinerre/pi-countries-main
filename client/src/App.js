import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar/searchBar';
import Cards from './Components/Cards/cards'


function App() {

  const [country, setCountry] = useState([])

  async function onSearch(country) {
    console.log(country);
    const response = await fetch(`http://localhost:3001/countries/name?name=${country}`)
    const jsonData = await response.json();
    setCountry((country) => [...countries, country])
    console.log(jsonData);

    // .then((response) => response.json())
    // .then((country) => { setCountry((country) => [...country, country]) })
  };

  // function onClose(id) {
  //   setCountry(countries.filter((element) => element.id !== id));
  // }
  return (
    <div style={{ padding: '25px' }}>
      <SearchBar onSearch={onSearch} />
      <Cards jsonData={jsonData} />
    </div>
  )
}

export default App;

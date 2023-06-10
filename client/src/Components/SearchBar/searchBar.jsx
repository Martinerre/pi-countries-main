import { useState } from "react";

export default function SearchBar(props) {
   const [country, setCountry] = useState(0);

   const handleSearch = (event) => {
      let { value } = event.target;
      setCountry(value)
   };

   return (
      <div>
         <input type="search" onChange={handleSearch} />
         <button onClick={() => props.onSearch(countries)}> Buscar </button>
      </div>
   )
}
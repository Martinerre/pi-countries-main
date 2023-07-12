import { useState } from "react";

export default function SearchBar(props) {
   const [country, setCountry] = useState([]);

   const handleSearch = (event) => {
      let { value } = event.target;
      setCountry(value)
   };

   return (
      <div>
         <input
            type="search"
            onChange={handleSearch}
         />
         <button onClick={() => props.onSearch(country)}> Buscar </button>
      </div>
   )
}
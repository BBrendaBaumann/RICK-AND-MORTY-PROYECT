import React from "react";



export default function SearchBar(props) {

   const [id, setId] = React.useState(""); //* [ Estado, manejador]
   const handleChange = event => {
      const {value} = event.target;
      // console.log(value);
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   //* Traer Character Random
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};
   
   return (
      <div className="searchbar_container">
         <input
            className="searchbar_inputId"
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button className="searchbar_buttons" onClick={handleClick}>Add</button>
         {/* Traer Character Random */}
         <button className="searchbar_buttons" onClick={handleRandom}>Random</button>
         
      </div>
   );
}
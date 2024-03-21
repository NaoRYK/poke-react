import React, { useContext } from "react";
import { PokemonContext } from "../Context/globalContext";

const GetPokemonForm = () => {
  const { setQuery,query } = useContext(PokemonContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input= e.target.querySelector('input')
    const inputValue= input.value.toLowerCase();;
    if (input.value.length >= 1) {

      setQuery(inputValue);
      input.value = "";
      
    }
    else{
      alert("Write a pokemon")
    }


    
  };

  return (
    <form className="border-t-4 border-t-mahogany-900 overflow-hidden flex w-full h-16 bg-mahogany-950/40" onSubmit={handleSubmit} >
      <input minLength={1} className=" p-2 text-mahogany-400 bg-mahogany-800/40 placeholder:text-mahogany-100/50 rounded-bl-lg w-full focus:outline-double focus:outline-mahogany-600" type="text" placeholder="Write a pokemon name" />
      <button className="rounded-br-xl text-center w-40" type="submit">Search</button>
    </form>
  );
};

export default GetPokemonForm;

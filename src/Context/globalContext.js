// PokemonContext.js
import React, { createContext, useState } from 'react';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [query, setQuery] = useState("pikachu")

  return (
    <PokemonContext.Provider value={{ query,setQuery }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };

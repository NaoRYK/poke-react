import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PokemonProvider } from './Context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <PokemonProvider>
    <App></App>
  </PokemonProvider>



);


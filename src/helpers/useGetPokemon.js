import axios from "axios";
import { useState,useContext  } from "react";
import { PokemonContext } from "../Context/globalContext";


export const useGetPokemon = () =>{
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const {query} = useContext(PokemonContext);


    // Fetch the pokemon data
    async function getPokemon(){
        setLoading(true);
        setError(false);
        setPokemon(undefined)
        try {
            const req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
            const pokemon = req.data; 
            setPokemon(pokemon);
            setLoading(false)
            setError(false)

 
            }
        catch(err){
            console.log(err)
            setError(true)
            setLoading(false)
            setPokemon("")
        }
    }

    
    return  {pokemon, loading, error, getPokemon};
}
import { useContext, useEffect } from "react";
import GetPokemonForm from "../GetPokemonForm/GetPokemonForm";
import Type from "../Type/Type";
import { useGetPokemon } from "../helpers/useGetPokemon";
import { PokemonContext } from "../Context/globalContext";

const PokeSearchContainer = () => {
  const { pokemon, error, loading, getPokemon } = useGetPokemon();

  const { query } = useContext(PokemonContext);

  useEffect(() => {
    getPokemon();
  }, [query]);

  return (
    <>
      <div className="flex flex-col justify-start items-centerflex-col h-4/5 w-128 rounded-xl border-4 border-mahogany-900 bg-mahogany-950/10 text-mahogany-700">
        { loading && <p className="text-lg  p-4 bg-gradient-to-b from-mahogany-950 text-mahogany-50 flex flex-col w-full h-full justify-start items-center">Searching pokemon...</p>
        
        }
        {error && <p className="text-lg p-4 bg-gradient-to-b from-mahogany-950 text-mahogany-50 flex flex-col w-full h-full justify-start items-center">Error loading the pokemon, try again 😔</p>}
        {pokemon && (
          <div className=" p-4 bg-gradient-to-b from-mahogany-950 text-mahogany-50 flex flex-col w-full h-full justify-center items-center">
            {" "}
            <h2 className="text-3xl text-mahogany-200 font-semibold">{ pokemon?.name?.toUpperCase()}</h2>
            <p>ID: {pokemon?.id}</p>
            <img className="h-40 mb-14" src={pokemon?.sprites?.other?.home.front_default} alt="pokeimg" />
            <div className="flex gap-32 mb-6">
              {pokemon.types &&
                pokemon.types.map((type) => (
                  <Type type={type.type.name} key={type.type.name} />
                ))}
            </div>
            <div className="bg-mahogany-900/60 rounded-3xl p-4 text-xl font-bold text-mahogany-100">WEIGHT: {pokemon?.weight}</div>
          </div>
        )}
        <GetPokemonForm></GetPokemonForm>
      </div>
    </>
  );
};

export default PokeSearchContainer;

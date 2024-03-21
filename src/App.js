import PokeSearchContainer from "./PokeSearchContainer/PokeSearchContainer";


function App() {
  return (
    <div className="App bg-slate-900 h-screen w-screen flex items-center justify-center flex-col gap-y-4">

      <h1 className=" text-4xl font-bold text-mahogany-800/60">Poke-React-App</h1>
      <PokeSearchContainer></PokeSearchContainer>
    </div>
  );
}

export default App;

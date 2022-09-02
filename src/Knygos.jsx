import Animals from "./Components/Animals";
import Pokemons from "./Components/FridayChallenge/01/Pokemons";
import Books from "./Components/Books";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Animals />
        <Pokemons />
        <div>
          <Books />
        </div>
      </header>
    </div>
  );
}

export default App;

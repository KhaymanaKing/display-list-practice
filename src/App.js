import CandyList from './Candies/CandyList';
import CharacterList from './Dnd/CharacterList';
import './App.css';
import './Candies/CandyCard.css';
// import your arrays here
import { candies } from './Candies/Candies.js';
import { characters } from './Dnd/Characters';


function App() {
  return (
    <div className="App">
      <CandyList candies={candies} />
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;

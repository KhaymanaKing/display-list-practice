import CandyList from './candies/CandyList';
import CharacterList from './Dnd/CharacterList';
import LizardPeopleList from './Lizard People/LizardPeopleList';
import './App.css';
import './candies/CandyCard.css';
// import your arrays here
import { candies } from './candies/Candies.js';
import { characters } from './Dnd/Characters';
import { lizardPeople } from './Lizard People/LizardPeople';
import { cats } from './Cats/Cats';
import CatList from './Cats/CatList';


function App() {
  return (
    <div className="App">
      <CandyList candies={candies} />
      <CharacterList characters={characters}/>
      <LizardPeopleList lizardPeople={lizardPeople}/>
      <CatList cats={cats}/>
    </div>
  );
}

export default App;

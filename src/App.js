import CandyList from './Candies/CandyList';
import CharacterList from './Dnd/CharacterList';
import LizardPeopleList from './Lizard People/LizardPeopleList';
import './App.css';
import './Candies/CandyCard.css';
// import your arrays here
import { candies } from './Candies/Candies.js';
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

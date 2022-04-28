import CandyList from './Candies/CandyList';
import './App.css';
import './Candies/CandyCard.css';
// import your arrays here
import { candies } from './Candies/Candies.js';



function App() {
  return (
    <div className="App">
      <CandyList candies={candies} />
    </div>
  );
}

export default App;

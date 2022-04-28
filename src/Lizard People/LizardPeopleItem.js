import React from 'react';
import './LizardCard.css';

export default function LizardPeopleItem({ name, picture, age, gender, eyeColor, friends, _id }) {
  return (
    <div className='lizard-person-card'>
      <h1>Possible Lizard Person: 
        {_id}</h1>
      <p>Name: {name}</p>
      <img src={picture}/>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Eye color: {eyeColor}</p>
      <span>Known Associates:</span>
      <ul className='friends'>
        {friends.map (friend => 
          <li key={friend}>{friend.name}
          </li>)}
      </ul>    
        
        
    </div>
  );
}


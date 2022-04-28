import React from 'react';
import './CharacterCard.css';

export default function CharacterItem({ character : { name, classType, mainstat, race, img } }) {
  return (
    <div className='character-card'>
      <h2>{name}</h2>
      <p>Class: {classType}</p>
      <p>Main Stat: {mainstat}</p>
      <p>Character Race: {race}</p>
      <img src={img}/>
    </div>
  );
}


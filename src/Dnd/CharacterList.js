
import React from 'react';
import CharacterItem from './CharacterItem.js';

export default function CharacterList({ characters }) {
  return (
    <div className='character-list'>
      {
        characters.map((character) =>
          <CharacterItem key ={character.name}
            character={character}
          />
        )
      }
    </div>
  );
}

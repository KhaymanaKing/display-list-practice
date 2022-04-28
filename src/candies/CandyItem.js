import React from 'react';
import './CandyCard.css';

export default function CandyItem({ candy : { name, chocolate, rating } }) {
  return (
    <div className='candy-item'>
      <p>Candy Name: {name}</p>
      <p>Is it chocolate: {chocolate}</p>
      <p>How I rate it: {rating}</p>
    </div>
  );
}


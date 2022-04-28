import React from 'react';
import './CatCard.css';

export default function CatItem({ cat: { name, goodCat, sleepSpot, img } }) {
  return (
    <div className='cat-card'>
      <p>Kitty Name: {name}</p>
      <p> Is good: {goodCat}</p>
      <p> Favorite place place to nap is {sleepSpot}</p>
      <img src={img}/>
    </div>
  );
}


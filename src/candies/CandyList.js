import React from 'react';
import CandyItem from './CandyItem';
import './CandyCard.css';

export default function CandyList({ candies }) {
  return (
    <div className='candy-list'>
      {
        candies.map((candy) => 
          <CandyItem key={candy.name}
            candy={candy}
          />
        )
    
      }
    </div>
  );
}

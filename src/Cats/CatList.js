import React from 'react';
import CatItem from './CatItem';

export default function CatList({ cats }) {
  return (
    <div className='cat-list'>
      {
        cats.map((cat) => 
          <CatItem key={cat.name}
            cat={cat}/>
        )
      }
    </div>
  );
}


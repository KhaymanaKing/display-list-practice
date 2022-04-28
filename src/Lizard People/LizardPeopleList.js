import React from 'react';
import LizardPeopleItem from './LizardPeopleItem';

export default function LizardPeopleList({ lizardPeople }) {
  return (
    <div className='lizardPeople-list'>
      { lizardPeople.map((lizardPerson) =>
        <LizardPeopleItem key={lizardPerson._id}
          {...lizardPerson}
        />)}
    </div>
  );
}


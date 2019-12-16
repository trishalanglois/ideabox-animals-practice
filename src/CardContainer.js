import React from 'react';
import Card from './Card'

const CardContainer = ({ allAnimals }) => {
  console.log('container props', allAnimals);
  return allAnimals.map(animal => {
    return (
      <Card
        id={animal.id}
        name={animal.name}
        diet={animal.diet}
        fun_fact={animal.fun_fact}
      />
    )
  })
}

export default CardContainer;

import React from 'react';

const Card = ({ id, name, diet, fun_fact }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p><em>Diet:</em>{diet}</p>
      <p><em>Fun Fact:</em>{fun_fact}</p>
    </article>
  )
}

export default Card;

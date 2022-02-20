import React, { useState } from 'react';
import Card from '../components/Card.jsx';

function CardContainer(props) {
  const cardsFeed = [];
  // iterate through props.cards
  for (let i = 0; i < props.cards.length; i++) {
    cardsFeed.push(<Card key={i} cards={props.cards[i]} />);
  }

  return(
    <div>
      <h2>Card Container</h2>
      <form action='' onSubmit={(e) => props.cardSubmit(e)}>
        <input type='text' onChange={(e) => props.cardTextEntry(e)} value={props.cardText}/>
        <input type='submit' />
      </form> 
      {cardsFeed}
    </div>
  )
}

export default CardContainer;
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Card(props) {
  function handleClick () {
    props.setTrigger(true);
    props.setEmojiText(props.cards.emoji);
    props.setCardText(props.cards.title);
    props.setBodyText(props.cards.text);
    props.setCurrentCardId(props.cards._id);
  }  
    
  return(
    <div className='Card'>
      <h3 onClick={handleClick} style={{cursor : 'pointer'}}>{ props.cards.title }</h3>
      <p>{ props.cards.emoji + ' ' + props.cards.text}</p>
      <Button className='cardButton' variant="text" size="small" onClick={() => props.deleteCard(props.cards._id)}>X</Button>
    </div>
  );
}

export default Card;
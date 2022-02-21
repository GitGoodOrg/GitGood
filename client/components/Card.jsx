import React, { useState, useEffect } from 'react';

function Card(props) {
  function handleClick () {
    props.setTrigger(true);
    props.setEmojiText(props.cards.emoji);
    props.setCardText(props.cards.title);
    props.setBodyText(props.cards.text);
    props.setCurrentCardId(props.cards._id);
  }  
    
  return(
    <div>
      <h3 onClick={handleClick} style={{cursor : 'pointer'}}>{ props.cards.title }</h3>
      <p>{ props.cards.emoji + ' ' + props.cards.text + ' ' + props.cards._id}</p>
      <button onClick={() => props.deleteCard(props.cards._id)}>X</button>
    </div>
  );
}

export default Card;
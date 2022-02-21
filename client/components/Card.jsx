import React, { useState, useEffect } from 'react';

function Card(props) {
  function handleClick () {
  }  
    
  return(
    <div onClick={handleClick} style={{cursor : 'pointer'}}>
      <h3>{ props.cards.title }</h3>
      <p>{ props.cards.emoji + ' ' + props.cards.text }</p>
    </div>
  );
}

export default Card;
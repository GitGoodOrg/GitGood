import React, { useState, useEffect } from 'react';

function Card(props) {
  function handleClick () {
    console.log('Hello Card', props.cards);
  }  
    
  return(
    <div onClick={handleClick} style={{cursor : 'pointer'}}>
      <h3>{ props.cards }</h3>
    </div>
  );
}

export default Card;
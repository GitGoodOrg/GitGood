import React, { useState, useEffect } from 'react';
import './ExpandedCard.css';

function ExpandedCard(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTrigger(false);
    if(props.currentCardId) {
      props.updateCard(props.currentCardId);
    }
    else {
      props.addCard();
    }
  };
    
  return (props.trigger) ? (
    <div className="ExpandedCard">
      <div className="ExpandedCard-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
        <form action='' onSubmit={handleSubmit}>
          <input type='text' placeholder='Select emoji...' onChange={(e) => props.emojiTextEntry(e)} value={props.emojiText}/><br></br>
          <input type='text' placeholder='Add subtopic title...' onChange={(e) => props.cardTextEntry(e)} value={props.cardText}/><br></br>
          <input type='text' placeholder='Add subtopic body...' onChange={(e) => props.bodyTextEntry(e)} value={props.bodyText}/><br></br>
          <input type='submit' value="Save Subtopic"/>
        </form>
      </div>
    </div>
  ) : '';
}

export default ExpandedCard;
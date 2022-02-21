import React, { useState, useEffect } from 'react';
import './ExpandedCard.css';

function ExpandedCard(props) {
    
  return (props.trigger) ? (
    <div className="ExpandedCard">
      <div className="ExpandedCard-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
        <form action='' onSubmit={(e) => props.addCard(e)}>
          <input type='text' placeholder='Select emoji...' onChange={(e) => props.emojiTextEntry(e)} value={props.emojiText}/><br></br>
          <input type='text' placeholder='Add subtopic title...' onChange={(e) => props.cardTextEntry(e)} value={props.cardText}/><br></br>
          <input type='text' placeholder='Add subtopic body...' onChange={(e) => props.bodyTextEntry(e)} value={props.bodyText}/><br></br>
          <input type='submit' value="Save Subtopic"/>
        </form>
        <button onClick={() => props.deleteCard(props.card_id)}>X</button>
      </div>
    </div>
  ) : '';
}

export default ExpandedCard;
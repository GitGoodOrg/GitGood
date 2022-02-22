import React, { useState, useEffect } from 'react';
// import './ExpandedCard.css';
import { TextField } from '@mui/material';

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
          <input type='text' className='emojiBody' placeholder='Select emoji...' onChange={(e) => props.emojiTextEntry(e)} value={props.emojiText}/> <input type='text' className='titleBody' placeholder='Add subtopic title...' onChange={(e) => props.cardTextEntry(e)} value={props.cardText}/>
          <br></br>
          <textarea type='text' className='subtopicBody' placeholder='Add subtopic body...' onChange={(e) => props.bodyTextEntry(e)} value={props.bodyText}/><br></br>
          <input type='submit' className='submitButtons' value="Save Subtopic"/>
        </form>
      </div>
    </div>
  ) : '';
}

export default ExpandedCard;
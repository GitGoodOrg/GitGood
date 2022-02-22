import React, { useState, useEffect } from 'react';
// import './ExpandedCard.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

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
        <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
        <form action='' onSubmit={handleSubmit}>
          <TextField size='small' sx={{ m: 0.1 }} type='text' className='emojiBody' placeholder='Select emoji...' onChange={(e) => props.emojiTextEntry(e)} value={props.emojiText}/> <TextField size="small" sx={{ m: 3 }} type='text' className='titleBody' placeholder='Add subtopic title...' onChange={(e) => props.cardTextEntry(e)} value={props.cardText}/>
          <br></br>
          <textarea type='text' className='subtopicBody' placeholder='Add subtopic body...' onChange={(e) => props.bodyTextEntry(e)} value={props.bodyText}/><br></br>
          <Button variant="contained" type='submit' className='submitButtons' value="Save Subtopic">Save Subtopic</Button>
        </form>
      </div>
    </div>
  ) : '';
}
// sx={{ m: 0.5 }}
export default ExpandedCard;
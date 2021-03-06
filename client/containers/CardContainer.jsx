import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import ExpandedCard from '../components/ExpandedCard.jsx';
import { Button } from '@mui/material';

function CardContainer(props) {
  const [ buttonPopup, setButtonPopup ] = useState(false);
  const [ currentCardId, setCurrentCardId ] = useState(undefined);
  
  
  const cardsFeed = [];
  for (let i = 0; i < props.cards.length; i++) {
    cardsFeed.push(<Card key={i} cards={props.cards[i]} deleteCard={props.deleteCard} trigger={buttonPopup} setTrigger={setButtonPopup} setBodyText={props.setBodyText} setEmojiText={props.setEmojiText} setCardText={props.setCardText} setCurrentCardId={setCurrentCardId}/>);
  }

  return(
    <div className="CardContainer">
      <h2>{props.currentTopicName}</h2>
      <Button variant="contained" size="small" className='addSubtopic' onClick={() => {setCurrentCardId(undefined);
        setButtonPopup(true);}}
      >
        Add Subtopic
      </Button>

      <div className='subtopicsContainer'>
        {cardsFeed}
        <ExpandedCard 
          trigger={buttonPopup} 
          setTrigger={setButtonPopup}
          bodyText={props.bodyText} 
          emojis={props.emojis} 
          emojiText={props.emojiText} 
          bodies={props.bodies} 
          cards={props.cards} 
          cardSubmit={props.cardSubmit} 
          cardTextEntry={props.cardTextEntry} 
          cardText={props.cardText}
          bodyTextEntry={props.bodyTextEntry}
          emojiTextEntry={props.emojiTextEntry}
          addCard={props.addCard}
          deleteCard={props.deleteCard}
          currentCardId={currentCardId}
          updateCard={props.updateCard}
        />
      </div>
    </div>
  );
}

export default CardContainer;
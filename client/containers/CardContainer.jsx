import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import ExpandedCard from '../components/ExpandedCard.jsx';

function CardContainer(props) {
  const [ buttonPopup, setButtonPopup ] = useState(false);
  const cardsFeed = [];
  for (let i = 0; i < props.cards.length; i++) {
    cardsFeed.push(<Card key={i} cards={props.cards[i]} />);
  }

  return(
    <div className="CardContainer">
      <h2>Resources</h2>
      <button onClick={() => setButtonPopup(true)}>Add Subtopic</button>
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
      />
    </div>
  );
}

export default CardContainer;
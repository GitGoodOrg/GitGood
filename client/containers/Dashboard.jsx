import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import CardContainer from './CardContainer.jsx';

function Dashboard() {
    
  const [ topics, setTopics ] = useState({});
  const [ cards, setCards ] = useState([]);
  const [ emojis, setEmojis ] = useState([]);
  const [ bodies, setBodies ] = useState([]);
  // const [ topicId]

  const [ topicText, setTopicText ] = useState('');
  const [ cardText, setCardText ] = useState('');
  const [ emojiText, setEmojiText ] = useState(''); //might be dropdown later
  const [ bodyText, setBodyText ] = useState('');

  useEffect(() => {
    getTopics();
  },[]);

  const getTopics = () => {
    const url = 'http://localhost:3000/api/topic';
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setTopics(data);
      });
  };

  const getCards = (topic_id) => {
    const url = `http://localhost:3000/api/subtopic/${topic_id}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setCards(data);
      });
  };

  const topicSubmit = (e) => {
    const topicTitle = e.target[0].value;
    e.preventDefault();
    setTopics([...topics, topicText]);
    setTopicText('');
    // fetch('http://localhost:3000/api/topic', {
    //   method: 'Post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
    //     topic_name: topicTitle,
    //   }
    // })
    //   .then((data) => data.json())
    //   .then((data) => data[_id])
      // .then((data) => JSON.parse(data))
  };

  // fx cardSubmit will submit the card, the body, the emoji
  const cardSubmit = (e) => {
    e.preventDefault();
    const emojiValue = e.target[0].value;
    const cardTitleValue = e.target[1].value;
    const bodyValue = e.target[2].value;
    console.log(e.target[0].value);
    setCards([...cards, cardText]);
    setCardText('');
    // bodySubmit();
    // emojiSubmit();
    // fetch('http://localhost:3000/subtopic', {
    //   method: 'Post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
          // Emoji: emojiValue,
          // SubTopic: cardTitleValue,
          // body: bodyValue  
    //   }
    // })

  };

  // cardSubmit inner functions
  const emojiSubmit = (e) => {
    e.preventDefault();
    setEmojis([...emojis, emojiText]);
    setEmojiText('');
  }; 

  const bodySubmit = (e) => {
    e.preventDefault();
    setBodies([...bodies, bodyText]);
    setBodyText('');
  };

  const topicTextEntry = (e) => {
    // console.log(e);
    setTopicText(e.target.value);
  };

  const bodyTextEntry = (e) => {
    setBodyText(e.target.value);
  };

  const emojiTextEntry = (e) => {
    setEmojiText(e.target.value);
  };

  const cardTextEntry = (e) => {
    setCardText(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>GITGOOD</h1>
      </header>
      <Nav
        getCards={getCards}
        topics={topics}
        topicSubmit={topicSubmit}
        topicTextEntry={topicTextEntry}
        topicText={topicText} 
      />
      <CardContainer 
        bodyText={bodyText} 
        emojis={emojis} 
        emojiText={emojiText} 
        bodies={bodies} 
        cards={cards} 
        cardSubmit={cardSubmit} 
        cardTextEntry={cardTextEntry} 
        cardText={cardText}
        bodyTextEntry={bodyTextEntry}
        emojiTextEntry={emojiTextEntry}
      />        
    </div>
  );
}

export default Dashboard;
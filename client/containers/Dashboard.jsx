import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import CardContainer from './CardContainer.jsx';

function Dashboard() {
    
  const [ topics, setTopics ] = useState({});
  const [ cards, setCards ] = useState([]);
  const [ emojis, setEmojis ] = useState([]);
  const [ bodies, setBodies ] = useState([]);

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
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => console.log('err', err));
  };

  const getCards = (topic_id) => {
    const url = `http://localhost:3000/api/subtopic/${topic_id}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setCards(data);
      });
  };

  const topicSubmit = (e) => {
    // const topicTitle = e.target[0].value;
    e.preventDefault();
    fetch('http://localhost:3000/api/topic', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic_name: topicText,
      })
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const topicsCopy = {...topics};
        topicsCopy[data._id] = data.topic_name;
        setTopics(topicsCopy);
        setTopicText('');
      });
  };

  const deleteTopic = (topic_id) => {
    fetch(`http://localhost:3000/api/topic/${topic_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        console.log(data);
        const topicsCopy = {...topics};
        delete topicsCopy[topic_id];
        setTopics(topicsCopy);
      });
  };

  const addCard = (topic_id) => {
    // const topicTitle = e.target[0].value;
    topic_id.preventDefault();
    fetch(`http://localhost:3000/api/subtopic/${topic_id}`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const cardsCopy = {...cards};
        cardsCopy[data._id] = data.title;
        setCards(cardsCopy);
        setTopicText('');
      });
  };
  
  
  const deleteCard = (card_id) => {
    fetch(`http://localhost:3000/api/subtopic/${card_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        console.log(data);
        const cardsCopy = {...cards};
        delete cardsCopy[card_id];
        setCards(cardsCopy);
      });
  };

  const updateCard = (card_id) => {
    fetch(`http://localhost:3000/api/subtopic/${card_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        card_name: cardText,
      })
    })
      .then((data) => data.json())
      .then(data => {
        console.log(data);
        const cardsCopy = {...cards};
        setCards()
      })
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
        deleteTopic={deleteTopic}
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
        addCard={addCard}
        deleteCard={deleteCard}
      />        
    </div>
  );
}

export default Dashboard;
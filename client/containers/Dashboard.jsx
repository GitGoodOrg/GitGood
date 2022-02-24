import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import CardContainer from './CardContainer.jsx';
import GithubLogin from '../components/GithubLogin';
import { Button } from '@mui/material';

function Dashboard() {
  //All the topics in key value pairs {_id: name}
  const [topics, setTopics] = useState({});
  //All the cards for a topic in an array of objects [{card}, {card}]
  const [cards, setCards] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [bodies, setBodies] = useState([]);
  //the current topic id that the user is looking at
  const [currentTopicId, setCurrentTopicId] = useState();

  const [topicText, setTopicText] = useState('');
  const [cardText, setCardText] = useState('');
  const [emojiText, setEmojiText] = useState(''); //might be dropdown later
  const [bodyText, setBodyText] = useState('');

  useEffect(() => {
    getTopics();
  }, []);

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
        setCurrentTopicId(topic_id);
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
        const topicsCopy = { ...topics };
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
        const topicsCopy = { ...topics };
        delete topicsCopy[topic_id];
        setTopics(topicsCopy);
      });
  };

  const addCard = () => {
    // const topicTitle = e.target[0].value;
    fetch('http://localhost:3000/api/subtopic/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic_id: currentTopicId,
        title: cardText,
        emoji: emojiText,
        text: bodyText,
      })
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setCards([...cards, data]);
        setEmojiText('');
        setCardText('');
        setBodyText('');
      });
  };


  const deleteCard = (card_id) => {
    fetch(`http://localhost:3000/api/subtopic/${card_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        const cardsCopy = [...cards];
        let index;
        cardsCopy.forEach((cur, i) => {
          if (cur._id === card_id) index = i;
        });
        cardsCopy.splice(index, 1);
        setCards(cardsCopy);
      });
  };

  const updateCard = (card_id) => {
    fetch('http://localhost:3000/api/subtopic/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: card_id,
        title: cardText,
        emoji: emojiText,
        text: bodyText,
      })
    })
      .then((data) => data.json())
      .then(data => {
        console.log(data);
        const cardsCopy = [...cards];
        let index;
        cardsCopy.forEach((cur, i) => {
          if (cur._id === card_id) index = i;
        });
        cardsCopy[index] = data;
        setCards(cardsCopy);
        setEmojiText('');
        setCardText('');
        setBodyText('');
      });
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
    <div className='Dashboard'>
      <header>
        <h1 id='mainTitle' className='GitGoodTitle'>🤖GitGood</h1>
        <p id='subTitle' className='Tagline'>Organize your coding resources ✅</p>
        {/* {typeof topics !== 'object' ? <GithubLogin /> 
          : <Button variant="outlined" href='/logout'>Log out</Button>} */}
      </header>
      <div className='containers'>
        {typeof topics === 'object' &&
          <Nav
            getCards={getCards}
            topics={topics}
            topicSubmit={topicSubmit}
            topicTextEntry={topicTextEntry}
            topicText={topicText}
            deleteTopic={deleteTopic}
          />
        }
        {/* {currentTopicId && typeof topics === 'object' && */}

      </div>
      {/* <CardContainer
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
        setBodyText={setBodyText}
        setEmojiText={setEmojiText}
        setCardText={setCardText}
        updateCard={updateCard}
        currentTopicName={topics[currentTopicId]}
      /> */}
    </div>
  );
}

export default Dashboard;
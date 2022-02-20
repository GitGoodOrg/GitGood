import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import CardContainer from './CardContainer.jsx';

function Dashboard() {
    
  const [ topics, setTopics ] = useState(['Javascript']);
  const [ cards, setCards ] = useState(['React']);
  const [ topicText, setTopicText ] = useState('');
  const [ cardText, setCardText ] = useState('');
  
  const topicSubmit = (e) => {
    // prevent default just for submits
    e.preventDefault();
    setTopics([...topics, topicText]);
    setTopicText('');
  };

  const cardSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, cardText]);
    setCardText('');
  };

  const topicTextEntry = (e) => {
    // console.log(e);
    setTopicText(e.target.value);
  };

  const cardTextEntry = (e) => {
    console.log(e);
    setCardText(e.target.value);
  }

  return (
    <div>
      <header>
        <h1>GITGOOD</h1>
      </header>
      <Nav topics={topics} topicSubmit={topicSubmit} topicTextEntry={topicTextEntry} topicText={topicText} />
      <CardContainer cards={cards} cardSubmit={cardSubmit} cardTextEntry={cardTextEntry} cardText={cardText} />        
    </div>
  );
}

export default Dashboard;
import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import CardContainer from './CardContainer.jsx';

function Dashboard() {
    
  const [ topics, setTopics ] = useState(['Javascript']);
  const [ cards, setCards ] = useState(['React']);
  
  const topicSubmit = (e) => {
    e.preventDefault();
    setTopics([...topics, 'Hooks']);
  }

  const cardSubmit = (e) => {
      e.preventDefault();
      setCards([...cards, 'Theo']);
  }

    return (
      <div>
        <header>
            <h1>GITGOOD</h1>
        </header>
        <Nav topics={topics} topicSubmit={topicSubmit} />
        <CardContainer cards={cards} cardSubmit={cardSubmit} />        
      </div>
    )
}

export default Dashboard;
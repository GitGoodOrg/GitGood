import React, { useState } from 'react';
import Topic from '../components/Topic.jsx'

function Nav(props) {
  const topicsFeed = [];
  // iterate through props.topics
  for (let i = 0; i < props.topics.length; i++) {
    topicsFeed.push(<Topic key={i} topics={props.topics[i]} />);
  }

  return(
    <div>
      <h2>Topics</h2>
      <form action='' onSubmit={(e) => props.topicSubmit(e)}>
        <input type='text' placeholder='Add Topic...' onChange={(e) => props.topicTextEntry(e)} value={props.topicText}/>
        <input type='submit' />
      </form> 
      {topicsFeed}
    </div>
  );
}

export default Nav;
import React, { useState } from 'react';
import Topic from '../components/Topic.jsx';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';


function Nav(props) {
  const topicsFeed = [];
  // iterate through props.topics
  for (const topic_id in props.topics) {
    topicsFeed.push(<Topic key={topic_id} topics={props.topics[topic_id]} getCards={props.getCards} topic_id={topic_id} deleteTopic={props.deleteTopic}/>);
  }

  return(
    <div className='Nav'>
      <h2>Topics</h2>
      <form action='' onSubmit={(e) => props.topicSubmit(e)}>
        <TextField size="small" type='text' className='entryForm' placeholder='Add Topic...' onChange={(e) => props.topicTextEntry(e)} value={props.topicText}/>
        <Button variant="contained" size="small" type='submit' className='submitButtons'>Submit</Button>
      </form> 
      <br></br>
      {topicsFeed}
    </div>
  );
}

export default Nav;
import React, { useState, Fragment } from 'react';
import Topic from '../components/Topic.jsx';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';


function Nav(props) {
  const topicsFeed = [];
  // iterate through props.topics
  for (const topic_id in props.topics) {
    console.log(props.topics[topic_id].name);
    topicsFeed.push(<Topic key={topic_id} topics={props.topics[topic_id].name} getCards={props.getCards} topic_id={topic_id} deleteTopic={props.deleteTopic} />);
  }

  return (
    <Fragment>
      <div>
      <div className='Nav'>
        {topicsFeed}
      </div>
      <br></br>
      <div>
      <form action='' onSubmit={(e) => props.topicSubmit(e)} className="f3">
        <TextField sx={{ m: 0.5 }} size="small" type='text' className='entryForm' placeholder='Add Card' onChange={(e) => props.topicTextEntry(e)} value={props.topicText} />
        <Button sx={{ m: 0.5 }} variant="contained" size="small" type='submit' className='submitButtons'>Start</Button>
      </form>
      </div>
      </div>
    </Fragment>
  );
}

export default Nav;
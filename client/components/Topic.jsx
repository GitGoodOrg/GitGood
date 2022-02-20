import React, { useState, useEffect } from 'react';

function Topic(props) {
  function handleClick () {
    console.log('Hello Topic', props.topics);
    fetch(`http://localhost:3000/api/subtopic/${topic_id}`)
  }
  return(
    <div onClick={handleClick} style={{cursor : 'pointer'}}>
      <h3>{ props.topics }</h3>
    </div>
  );
}

export default Topic;
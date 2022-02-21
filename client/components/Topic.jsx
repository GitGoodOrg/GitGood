import React, { useState, useEffect } from 'react';

function Topic(props) {

  return(
    <h3 style={{cursor : 'pointer'}}>
      <span onClick={() => props.getCards(props.topic_id)}>
        { props.topics }
      </span>
      <button onClick={() => props.deleteTopic(props.topic_id)}>X</button>
    </h3>
  );
}

export default Topic;
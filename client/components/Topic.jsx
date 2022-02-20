import React, { useState, useEffect } from 'react';

function Topic(props) {

  return(
    <div onClick={() => props.getCards(props.topic_id)} style={{cursor : 'pointer'}}>
      <h3>{ props.topics }</h3>
    </div>
  );
}

export default Topic;
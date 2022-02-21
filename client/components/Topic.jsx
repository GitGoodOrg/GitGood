import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';

function Topic(props) {
  return (
    <div className="Topic">
      <h3 style={{ cursor: 'pointer' }}>
        <span onClick={() => props.getCards(props.topic_id)}>
          {props.topics}
        </span>
        <Button variant="text" size="small" className='deleteButtons' onClick={() => props.deleteTopic(props.topic_id)}>X</Button>
      </h3>
    </div>
  );
}

export default Topic;

import React, { useState } from "react";
import Topic from "../components/Topic.jsx"

function Nav(props) {
const topicsFeed = [];
// iterate through props.topics
for (let i = 0; i < props.topics.length; i++) {
    topicsFeed.push(<Topic key={i} topics={props.topics[i]} />);
}

  return(
    <div>
      <h2>Nav</h2>
      <form action="" onSubmit={props.topicSubmit}>
        <input type="submit" />
      </form> 
      {topicsFeed}
    </div>
  )
}

export default Nav;
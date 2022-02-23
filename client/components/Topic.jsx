import React, { useContext } from "react";
import { Button } from "@mui/material";
import { TopicContext } from "../App";

function Topic({ topic_id, topic, setTopics, topics }) {
  const { setCurrentTopicId } = useContext(TopicContext);

  const deleteTopic = (topic_id) => {
    fetch(`http://localhost:3000/api/topic/${topic_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      const topicsCopy = { ...topics };
      delete topicsCopy[topic_id];
      setTopics(topicsCopy);
    });
  };

  return (
    <div className="Topic">
      <h3 style={{ cursor: "pointer" }}>
        <span onClick={() => setCurrentTopicId(topic_id)}>{topic}</span>
        <Button
          variant="text"
          size="small"
          className="deleteButtons"
          onClick={() => deleteTopic(topic_id)}
        >
          X
        </Button>
      </h3>
    </div>
  );
}

export default Topic;

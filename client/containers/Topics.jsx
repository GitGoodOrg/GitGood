import React, { useEffect, useState } from "react";
import Topic from "../components/Topic.jsx";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function Topics() {
  //1) Get topics
  const [topics, setTopics] = useState({});

  useEffect(() => {
    getTopics();
  }, []);

  function getTopics() {
    const url = "http://localhost:3000/api/topic";
    fetch(url)
      .then((topicsJSON) => {
        return topicsJSON.json();
      })
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => console.log("err", err));
  }

  const topicsFeed = [];
  for (const topic_id in topics) {
    topicsFeed.push(
      <Topic
        key={topic_id}
        topic_id={topic_id}
        topic={topics[topic_id]}
        setTopics={setTopics}
        topics={topics}
      />
    );
  }

  //2) Handle new topic
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/topic", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic_name: input,
      }),
    })
      .then((newTopicJSON) => newTopicJSON.json())
      .then((newTopic) => {
        setTopics({ ...topics, [newTopic._id]: newTopic.topic_name });
        setInput("");
      });
  };

  return (
    <div className="Nav">
      <h2>Topics</h2>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          sx={{ m: 0.5 }}
          size="small"
          type="text"
          className="entryForm"
          placeholder="Add Topic..."
          onChange={handleChange}
          value={input}
        />
        <Button
          sx={{ m: 0.5 }}
          variant="contained"
          size="small"
          type="submit"
          className="submitButtons"
        >
          Submit
        </Button>
      </form>
      <br></br>
      {topicsFeed}
    </div>
  );
}

export default Topics;

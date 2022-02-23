import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import ExpandedCard from "../components/ExpandedCard.jsx";
import { Button } from "@mui/material";
import { TopicContext } from "../App.jsx";

function Subtopics() {
  //1) Config current card for adding/updating cards in popup
  const [currentCard, setCurrentCard] = useState(null);

  //2) Get cards for current topic
  const [cards, setCards] = useState([]); // [{card}, {card}]

  const { currentTopicId } = useContext(TopicContext);

  useEffect(() => {
    getCards();
  }, [currentTopicId]);

  function getCards() {
    const url = `http://localhost:3000/api/subtopic/${currentTopicId}`;
    console.log(url);

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCards(data);
      });
  }

  const cardsFeed = [];
  for (let i = 0; i < cards.length; i++) {
    cardsFeed.push(
      <Card
        key={i}
        card={cards[i]}
        setCurrentCard={setCurrentCard}
        cards={cards}
        setCards={setCards}
      />
    );
  }
  console.log(currentCard);
  return (
    <div className="CardContainer">
      <Button
        variant="contained"
        size="small"
        className="addSubtopic"
        onClick={() => {
          setCurrentCard({});
        }}
      >
        Add Subtopic
      </Button>

      <div className="subtopicsContainer">
        {cardsFeed}

        <ExpandedCard
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
          cards={cards}
          setCards={setCards}
        />
      </div>
    </div>
  );
}

export default Subtopics;

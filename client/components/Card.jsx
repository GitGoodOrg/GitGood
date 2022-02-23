import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Card({ card, setCurrentCard, cards, setCards }) {
  //1) Config popup with card data
  function handleClick() {
    setCurrentCard({
      id: card._id,
      emoji: card.emoji,
      title: card.title,
      text: card.text,
    });
  }

  //2) Delete a card
  const deleteCard = (card_id) => {
    fetch(`http://localhost:3000/api/subtopic/${card_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const cardsCopy = [...cards];
        let index;
        cardsCopy.forEach((cur, i) => {
          if (cur._id === card_id) index = i;
        });
        cardsCopy.splice(index, 1);
        setCards(cardsCopy);
      });
  };

  return (
    <div className="Card">
      <h3 onClick={handleClick} style={{ cursor: "pointer" }}>
        {card.title}
      </h3>
      <p>{card.emoji + " " + card.text}</p>
      <Button
        className="cardButton"
        variant="text"
        size="small"
        onClick={() => deleteCard(card._id)}
      >
        X
      </Button>
    </div>
  );
}

export default Card;

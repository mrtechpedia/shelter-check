import React from "react";
import { Card } from "react-bootstrap";

import "./features_card.styles.css";

function FeaturesCard({ cardTitle, cardText, image }) {
  return (
    <Card className="feature_card ">
      <Card.Body className="feature_card_body">
        <Card.Img className="feature_card_image" variant="top" src={image} />

        <div className="feature_card_title_and_text">
          <Card.Title className="feature_card_title">{cardTitle}</Card.Title>
          <Card.Text className="feature_card_text">{cardText}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FeaturesCard;

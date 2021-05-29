import React from "react";
import { Card } from "react-bootstrap";

import "./review_card.styles.css";

function ReviewCard({ name, imagesrc, twitter, theReview }) {
  return (
    <Card className="review_card">
      <Card.Body>
        <Card.Text className="person_review">{theReview}</Card.Text>
      </Card.Body>
      <div className="review_image_and_title">
        <Card.Img variant="top" src={imagesrc} className="person_image" />
        <div className="review_card_title">
          <Card.Title className="person_name">{name}</Card.Title>
          <div>
            <Card.Text className="person_twitter">{twitter}</Card.Text>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ReviewCard;

import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./salon_image_card.styles.css";

const SalonImageCard = ({ imagesrc, imagename, imagelink }) => {
  const history = useHistory();
  return (
    <div className="salon_outer" onClick={() => history.push(imagelink)}>
      <Card className="salon_image_card hover-shadow ripple" style={{}}>
        <Card.Img variant="top" src={imagesrc} className="salon_image" />
      </Card>

      <div className="salon_title">{imagename}</div>
    </div>
  );
};

export default SalonImageCard;

import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./cleaning_image_card.styles.css";

const CleaningImageCard = ({ imagesrc, imagename, imagelink }) => {
  const history = useHistory();
  return (
    <div className="cleaning_outer" onClick={() => history.push(imagelink)}>
      <Card className="cleaning_image_card hover-shadow ripple" style={{}}>
        <Card.Img variant="top" src={imagesrc} className="cleaning_image" />
      </Card>
      <div className="cleaning_title">{imagename}</div>
    </div>
  );
};

export default CleaningImageCard;
// "holder.js/100px180"

import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./decor_image_card.styles.css";

const DecorImageCard = ({ imagesrc, imagename, imagelink }) => {
  const history = useHistory();
  return (
    <div className="decor_outer" onClick={() => history.push(imagelink)}>
      <Card className="decor_image_card hover-shadow ripple" style={{}}>
        <Card.Img variant="top" src={imagesrc} className="decor_image" />
      </Card>
      <div className="decor_title">{imagename}</div>
    </div>
  );
};

export default DecorImageCard;
// "holder.js/100px180"

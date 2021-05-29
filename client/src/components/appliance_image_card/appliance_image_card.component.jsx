import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

import "./appliance_image_card.styles.css";

const ApplianceImageCard = ({ imagesrc, imagename, imagelink }) => {
  const history = useHistory();
  return (
    <div className="appliance_outer" onClick={() => history.push(imagelink)}>
      <Card className="appliance_image_card hover-shadow ripple">
        <Card.Img variant="top" src={imagesrc} className="appliance_image" />
      </Card>

      <div className="appliance_title">{imagename}</div>
    </div>
  );
};

export default ApplianceImageCard;
// "holder.js/100px180"

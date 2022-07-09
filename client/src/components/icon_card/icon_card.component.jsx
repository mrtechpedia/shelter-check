import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

import "./icon_card.styles.css";

// import icon from "../../assets/household.png";

const IconCard = ({ iconsrc, iconname, iconlink }) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(iconlink)}>
      {/* I M ICON CARD */}
      <Card className="icon_card hvr-grow " style={{}}>
        <Card.Img variant="top" className="icon" src={iconsrc} />
        <Card.Body>
          <Card.Title className="icon_title">{iconname}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IconCard;

// {`../../assets/${src}`}

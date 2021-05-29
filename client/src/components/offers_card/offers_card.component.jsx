import React from "react";
import { useHistory } from "react-router";
import "./offers_card.styles.css";

const OffersCard = ({ imagesrc, imagelink }) => {
  const history = useHistory();
  return (
    <div
      class="bg-image hover-overlay  hover-shadow ripple offer_card"
      onClick={() => history.push(imagelink)}
    >
      <img src={imagesrc} class="offer_image w-100" alt="" />
      <div
        class="mask"
        style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
      ></div>
    </div>
  );

  //   {/* I M OFFERS CARD */}
  //   {/* <Card className="offer_card" style={{}}>
  //     <Card.Img variant="top" className="offer_image bg-image hover-overlay hover-zoom hover-shadow ripple" src={imagesrc} />

  //     <a href="#!">
  //   <div class="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
  // </a> */}
  //   {/* <Card.Body>
  //         <Card.Title className="icon_title">{iconname}</Card.Title>
  //       </Card.Body> */}

  //   {/* </Card> */}
};

export default OffersCard;

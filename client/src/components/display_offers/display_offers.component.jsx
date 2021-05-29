import React from "react";

import "./display_offers.styles.css";

import OffersRow from "../offers_row/offers_row.component";


// function createOffersCard(review) {
//   return (
//     <OffersCard
//       key={review.id}
//       imagesrc={review.imgURL}
//     />
//   );
// }

const DisplayOffers = () => (
  <div className="display_offers">
    <div className="offer_title">
      OUR TOP OFFERS
    </div>
    <OffersRow />
    
  </div>
);

export default DisplayOffers;

// {`display_services ${mainHeading ==="GADGET ASSISTANCE" ? "purple_bg" : "white_bg"}`}

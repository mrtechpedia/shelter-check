import React from "react";
import FeaturesCard from "../features_card/features_card.component";
import KeyFeatures from "../../details-js/features_details";

import "./features_row.styles.css";

function FeaturesRow({ start, end }) {
  function createFeatureCard(card) {
    return (
      <FeaturesCard
        key={card.id}
        cardTitle={card.title}
        cardText={card.text}
        image={card.imgURL}
      />
    );
  }

  return (
    <div className="features_row">
      {KeyFeatures.filter(function (feature) {
        return start <= feature.id && feature.id <= end;
      }).map(createFeatureCard)}
    </div>
  );
}

export default FeaturesRow;

import React from "react";
import FeaturesRow from "../features_row/features_row.component";

import "./features.styles.css";

function Features() {
  return (
    <div className="features_component">
      <div className="features_heading">KEY FEATURES</div>
      <FeaturesRow start={1} end={2} />
      <FeaturesRow start={3} end={4} />
    </div>
  );
}

export default Features;

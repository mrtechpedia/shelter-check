import React from "react";

import "./display_services.styles.css";

import ImageRow from "../image_row/image_row.component";

const DisplayServices = ({ mainHeading, subHeading }) => (
  <div className="display_services">
    <div className="main_heading">{mainHeading}</div>
    <div className="sub_heading">
      {subHeading}
      <ImageRow mainHeading={mainHeading} />
    </div>
  </div>
);

export default DisplayServices;

// {`display_services ${mainHeading ==="GADGET ASSISTANCE" ? "purple_bg" : "white_bg"}`}

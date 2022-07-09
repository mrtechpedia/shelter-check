import React from "react";

import "./our_services.styles.css";

import IconRow from "../icon_row/icon_row.component";

const OurServices = () => (
  <div className="our_services">
    {/* OUR SERVICES */}
    <IconRow start={1} end={6} />
    <IconRow start={7} end={12} />
  </div>
);

export default OurServices;

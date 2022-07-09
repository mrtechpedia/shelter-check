import React from "react";

import "./icon_row.styles.css";

import IconCard from "../icon_card/icon_card.component";

import IconDetails from "../../details-js/icon_details";

function createCard(icon) {
  return (
    <IconCard
      key={icon.id}
      iconsrc={icon.imgURL}
      iconname={icon.name}
      iconlink={icon.link}
    />
  );
}

const IconRow = ({ start, end }) => (
  <div className="icon_row_outer">
    <div class="icon_row">
      {IconDetails.filter(function (icon) {
        return start <= icon.id && icon.id <= end;
      }).map(createCard)}
    </div>
  </div>
);

export default IconRow;

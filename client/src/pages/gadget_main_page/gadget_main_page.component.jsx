import React from "react";

import GadgetBox from "../../components/gadget_box/gadget_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./gadget_main_page.styles.css";

const GadgetMainPage = ({CommonGadgetProps}) => {
  console.log(CommonGadgetProps);

  return (
    <div className="GadgetMainPage">
      <div class="flex-containerg">
        <div>
          <GadgetBox CommonGadgetProps={ CommonGadgetProps} />
        </div>
      </div>
    </div>
  );
};

export default GadgetMainPage;

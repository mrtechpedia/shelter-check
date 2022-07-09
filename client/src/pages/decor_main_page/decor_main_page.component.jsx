import React from "react";

import DecorBox from "../../components/decor_box/decor_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./decor_main_page.styles.css";

const DecorMainPage = ({CommonDecorProps}) => {
  console.log(CommonDecorProps);

  return (
    <div className="DecorMainPage">
      <div class="flex-containerd">
        <div>
          <DecorBox
           CommonDecorProps={CommonDecorProps}
          />
        </div>
      </div>
    </div>
  );
};

export default DecorMainPage;

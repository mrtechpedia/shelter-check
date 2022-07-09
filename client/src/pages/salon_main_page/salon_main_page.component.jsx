import React from "react";

import SalonBox from "../../components/salon_box/salon_box.component";

import "./salon_main_page.styles.css";

const SalonMainPage = ({CommonSalonProps}) => {
  console.log(CommonSalonProps);

  return (
    <div className="SalonMainPage">
      <div class="flex-container">
        <div>
          <SalonBox
            CommonSalonProps={CommonSalonProps}
          />
        </div>
      </div>
    </div>
  );
};

export default SalonMainPage;

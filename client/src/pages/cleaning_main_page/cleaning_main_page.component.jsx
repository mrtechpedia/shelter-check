import React from "react";

import CleaningBox from "../../components/cleaning_box/cleaning_box.component";
// import CleaningBoxRight from "../../components/salon_box_right/salon_box_right";

import "./cleaning_main_page.styles.css";

const CleaningMainPage = ({CommonCleaningProps}) => {
    console.log(CommonCleaningProps);

    return (

    <div className="CleaningMainPage">
        <div class="flex-containerc">
            <div>
                    <CleaningBox CommonCleaningProps={ CommonCleaningProps}/>
            </div>
          
</div>
       
       
    </div>
)}

export default CleaningMainPage;
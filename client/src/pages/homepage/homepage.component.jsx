import React from "react";

import "./homepage.styles.css";

import NavbarHome from "../../components/navbar_home/navbar_home.component";
import SearchSection from "../../components/search_section/search_section.component";
import OurServices from "../../components/our_services/our_services.component";
import DisplayServices from "../../components/display_services/display_services.component";
import Footer from "../../components/footer/footer.component";
import Features from "../../components/features/features.component";
import DisplayOffers from "../../components/display_offers/display_offers.component";

const Homepage = () => (
  <div>
    <NavbarHome />
    <SearchSection />
    <OurServices />

    <DisplayOffers />

    <DisplayServices
      mainHeading="GADGET ASSISTANCE"
      subHeading="Reconditioning, Repair, Servicing and Installation"
    />
    <DisplayServices
      mainHeading="INTERIOR DECORATION"
      subHeading="Wedding or a Birthday Bash ? Don't worry about the decorations."
    />
    <DisplayServices
      mainHeading="CLEANING AND TERMITE CONTROL"
      subHeading="Lose the mop and we'll clean the slop."
    />
    <DisplayServices
      mainHeading="SALON AND SPA"
      subHeading="Maintain yourself... And feel the joy."
    />
    <DisplayServices
      mainHeading="CUSTOMER REVIEWS"
      subHeading="We would love to hear from you too!"
    />
    <Features />

    <Footer />
  </div>
);

export default Homepage;

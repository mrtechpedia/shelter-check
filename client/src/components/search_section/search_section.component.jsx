import React from "react";

import "./search_section.styles.css";

import SearchForm from "../search_form/search_form.component";

const SearchSection = () => (
  <div className="hero_section">
    <div className="hero_section_text">
      <h1 className="heading">Get home services at your doorsteps.</h1>
      <SearchForm />
      <h6 className="small_heading">BOOK AN APPOINTMENT NOW</h6>
    </div>
  </div>
);

export default SearchSection;

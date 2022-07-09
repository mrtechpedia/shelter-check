import React from "react";
import Carousel from "react-elastic-carousel";

import "./image_row.styles.css";

import ApplianceImageCard from "../appliance_image_card/appliance_image_card.component";
import DecorImageCard from "../decor_image_card/decor_image_card.component";
import CleaningImageCard from "../cleaning_image_card/cleaning_image_card.component";
import SalonImageCard from "../salon_image_card/salon_image_card.component";
import ReviewCard from "../review_card/review_card.component";

import ApplianceImageDetails from "../../details-js/appliance_image_details";
import DecorImageDetails from "../../details-js/decor_image_details";
import CleaningImageDetails from "../../details-js/cleaning_image_details";
import SalonImageDetails from "../../details-js/salon_image_details";
import ReviewDetails from "../../details-js/review_details";

function createApplianceCard(image) {
  return (
    <ApplianceImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
      imagelink={`/gadgetmainpage/${image.link}`}
    />
  );
}

function createDecorCard(image) {
  return (
    <DecorImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
      imagelink={`/decormainpage/${image.link}`}
    />
  );
}

function createCleaningCard(image) {
  return (
    <CleaningImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
      imagelink={`/cleaningmainpage/${image.link}`}
    />
  );
}

function createSalonCard(image) {
  return (
    <SalonImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
      imagelink={`/salonmainpage/${image.link}`}
    />
  );
}

function createReviewCard(review) {
  return (
    <ReviewCard
      key={review.id}
      name={review.name}
      imagesrc={review.imgURL}
      twitter={review.twitter}
      theReview={review.review}
    />
  );
}

const ImageRow = ({ mainHeading }) => {
  return (
    <div>
      {mainHeading === "GADGET ASSISTANCE" && (
        <div className="image_row">
          {ApplianceImageDetails.map(createApplianceCard)}
        </div>
      )}
      {mainHeading === "INTERIOR DECORATION" && (
        <div className="image_row">
          {DecorImageDetails.map(createDecorCard)}
        </div>
      )}
      {mainHeading === "CLEANING AND TERMITE CONTROL" && (
        <div className="image_row">
          {CleaningImageDetails.map(createCleaningCard)}
        </div>
      )}
      {mainHeading === "SALON AND SPA" && (
        <div className="image_row">
          {SalonImageDetails.map(createSalonCard)}
        </div>
      )}
      {mainHeading === "CUSTOMER REVIEWS" && (
        <Carousel itemsToShow={3} itemsToScroll={3} className="review_carousel">
          {ReviewDetails.map(createReviewCard)}
        </Carousel>
      )}
    </div>
  );
};

export default ImageRow;

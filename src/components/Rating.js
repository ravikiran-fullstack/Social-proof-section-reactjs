import React from "react";

import Stars from "./Stars";

const Rating = ({ ratingInfo }) => {
  return (
    <div className="ratings row">
      <div className="col-4 col-sm-12 text-center">
        <Stars ratings={ratingInfo.ratings}></Stars>
      </div>{" "}
      <div className="col-8 col-sm-12 text-center">
        <span className="ratingsText">
          Rated {ratingInfo.ratings} Stars in {ratingInfo.website}
        </span>
      </div>
    </div>
  );
};

export default Rating;

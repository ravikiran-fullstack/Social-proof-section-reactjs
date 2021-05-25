import React from "react";

const Review = ({ review }) => {
  return (
    <div className="review col-4 col-sm-12">
      <div className="row">
        <div className="col-3 logo">
          <img src={review.reviewerPhoto} alt={review.reviewerPhoto} />
        </div>
        <div className="col-9 reviewerName">
          <div>{review.reviewer}</div>
          <div className="verifiedBuyer">
            {review.verifiedBuyer ? "verified buyer" : ""}
          </div>
        </div>
      </div>
      <div className="row reviewDescription">{review.description}</div>
    </div>
  );
};

export default Review;

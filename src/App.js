import Heading from "./components/Heading";

import { data } from "./data";
import Rating from "./components/Rating";
import Review from "./components/Review";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Heading/>
        <div className="ratingsSection col col-sm-12">
          {data.ratings.map((ratingInfo) => (
            <Rating key={ratingInfo.website} ratingInfo={ratingInfo}></Rating>
          ))}
        </div>
      </div>
      <div className="row reviewsSection">
        {data.reviews.map((review, index) => <Review key={index} review={review}></Review>)}
      </div>
    </div>
  );
}

export default App;

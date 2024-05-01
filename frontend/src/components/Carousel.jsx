import reviewData from "../assets/reviews.json";
import star from '../assets/svg/star.svg'
import Reviews from "./Reviews";

export default function Carousel() {
  return (
      <div className="carousel carousel-center w-full">
        {reviewData.map((review, index) => {
          return (
            <div className="carousel-item mx-4">
              <Reviews text={review.text} name={review.name} />
            </div>
          );
        })}
      </div>
  );
}

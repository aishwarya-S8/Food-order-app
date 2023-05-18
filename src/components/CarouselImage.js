import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselImage = () => {
  return (
    <Carousel swipeable={true} showArrows={true} autoPlay={true}>
      <div>
        <img src="https://carousels-ads.swiggy.com/images/slider/2.jpg" />
      </div>
      <div>
        <img src="https://carousels-ads.swiggy.com/images/slider/1.jpg" />
      </div>

      <div>
        <img src="https://carousels-ads.swiggy.com/images/slider/6.jpg" />
      </div>
    </Carousel>
  );
};

export default CarouselImage;

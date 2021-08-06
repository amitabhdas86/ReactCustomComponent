import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";
import Image1 from '../../images/card1.png';
import Image2 from '../../images/card2.png';
import Image3 from '../../images/card3.png';
import CardSlide from '../SlideTypes/CardSlide';
import DotSlide from '../SlideTypes/DotSlide';


const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={3}
    style={{ width: "300px" }}
  >
    <Slider>
      <CardSlide
        image={Image1}
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CardSlide
        header="Elliot Baker"
        image={Image2}
        index={1}
        meta="Friend"
      />
      <CardSlide
        header="Steve Sanders"
        image={Image3}
        index={2}
        meta="Friend"
      />
    </Slider>

    <DotSlide slides={3} />
  </CarouselProvider>
);

export default CardCarousel;

//npm i -S pure-react-carousel
// https://codesandbox.io/s/github/layershifter/semantic-ui-react-with-pure-react-carousel/tree/master/?file=/src/examples/CardCarousel.js
import { Divider} from 'semantic-ui-react';
import { CarouselProvider,Image,Slider,Slide } from "pure-react-carousel";
import React from "react";
import Image1 from '../../images/bat.png';
import Image2 from '../../images/wonder.png';
import Image3 from '../../images/super.png';
import DotSlide from '../SlideTypes/DotSlide'
import "pure-react-carousel/dist/react-carousel.es.css";

const DotCarousel = () =>{
    return(
    <CarouselProvider naturalSlideWidth={1} naturalSlideHeight={1} totalSlides={3}>
        <Slider>
          <Slide tag="a" index={0}>
            <Image src={Image1} />
          </Slide>
          <Slide tag="b" index={1}>
            <Image src={Image2} />
          </Slide>
          <Slide tag="c" index={2}>
            <Image src={Image3} />
          </Slide>
        </Slider>  
        <Divider />
        <DotSlide slides={3} />
      </CarouselProvider>
    );
}; 
 
export default DotCarousel;

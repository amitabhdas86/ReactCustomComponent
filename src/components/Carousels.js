import React,{useState} from 'react'
//npm install semantic-ui-react semantic-ui-css
import { Container, Header, Segment} from 'semantic-ui-react';
import "pure-react-carousel/dist/react-carousel.es.css";
//npm i react-select
import Select from 'react-select';
import DotCarousel from './CarouselType/DotCarousel';
import CardCarousel from './CarouselType/CardCarousel';
import ButtonCarousel from './CarouselType/ButtonCarousel';


const Carousels = () =>{
  const data=[
    {
      value:1,
      label:"Dot Carousel"
    },
    {
      value:2,
      label:"Card Carousel"
    },
    {
      value:3,
      label:"Button Carousel"
    }
  ];
  const [ddlValue, setddlValue]=useState(1);  
  const ddlHandler=(e) =>{
    setddlValue(e);
  } 
    return(
      <Container  style={{
        display: 'block', width: 500, padding: 10
      }}>
        <Header>
          Carousels Slider Component
        </Header> 
        <div>
          <Select placeholder="Select Option" value={ddlValue} options={data} onChange={ddlHandler}>
          </Select>
        </div> 
        
        <Segment attached="top">
          <Header as="h2" content={ddlValue.label} />          
        </Segment>
        <Segment attached="bottom">
         {ddlValue.value==1?<DotCarousel/>: null}  
         {ddlValue.value==2?<CardCarousel/>: null}
         {ddlValue.value==3?<DotCarousel/>: null}
        </Segment>
    </Container>

    );
};

export default Carousels

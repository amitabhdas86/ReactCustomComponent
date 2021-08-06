import React from "react";
import { Dot } from "pure-react-carousel";
import { Button, Container } from "semantic-ui-react";
import { PropTypes } from "prop-types";

const DotSlide = ({slides,size}) => {
    return(
    <Container textAlign="center">
        <Button.Group size={size}>
            {
                [...Array(slides).keys()].map( slide => (
                    <Button as={Dot} key={slide} icon="circle" slide={slide}/>
                ))
            }
        </Button.Group>
    </Container>
    );
};

DotSlide.defaultProps = {
    size: "mini"
};

DotSlide.propTypes={
slides: PropTypes.number.isRequired,
size: PropTypes.string
};

export default DotSlide
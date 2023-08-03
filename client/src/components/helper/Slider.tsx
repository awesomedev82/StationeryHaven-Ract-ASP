import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { sliderArray } from "../../lib/constants";
import { SliderContainer, SlideImage, SlideOverlay } from "../../muiStyles/slider.styled";
import CustomTitle from "./CustomTitle";

const Slider = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      showThumbs={false}
    >
      {sliderArray.map((slide, index) => (
        <div key={index}>
          <SliderContainer>
            <SlideImage
              src={slide.image}
              alt={`Slide ${index}`}
              loading="lazy"
              onLoad={handleImageLoad}
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />
            <SlideOverlay>
              <CustomTitle
                text={slide.title}
                variant="h4"
                fontFamily="Monserat"
                textTransform="uppercase"
                textAlign="center"
              />
            </SlideOverlay>
          </SliderContainer>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

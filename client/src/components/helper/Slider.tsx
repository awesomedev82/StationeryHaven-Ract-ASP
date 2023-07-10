import { useState } from "react";
import { sliderArray } from "../../lib/constants";
import CustomTitle from "./CustomTitle";
import {
  SlideImage,
  SlideOverlay,
  SliderContainer,
} from "../../muiStyles/slider.styled";
import SliderButton from "./SliderButton";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentSlide = sliderArray[currentImageIndex];

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderArray.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer>
      <SlideImage src={currentSlide.image} alt="slider" />
      <SlideOverlay>
        <CustomTitle
          text={currentSlide.title}
          variant="h4"
          fontFamily="Monserat"
          textTransform="uppercase"
        />
      </SlideOverlay>
      
      <SliderButton onClick={handlePreviousImage} direction="previous" />
      <SliderButton onClick={handleNextImage} direction="next" />
    </SliderContainer>
  );
};

export default Slider;

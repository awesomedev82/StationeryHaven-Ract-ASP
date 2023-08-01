import { useEffect, useState } from "react";
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
  const [imageLoaded, setImageLoaded] = useState(false);
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

  useEffect(() => {
    const imagePromises = sliderArray.map((slide) => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.src = slide.image;
        image.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setImageLoaded(true);
    });

    const interval = setInterval(handleNextImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {imageLoaded && (
        <SliderContainer>
          <SlideImage src={currentSlide.image} alt="slider" loading="lazy" />
          <SlideOverlay>
            <CustomTitle
              text={currentSlide.title}
              variant="h4"
              fontFamily="Monserat"
              textTransform="uppercase"
              textAlign="center"
            />
          </SlideOverlay>

          <SliderButton onClick={handlePreviousImage} direction="previous" />
          <SliderButton onClick={handleNextImage} direction="next" />
        </SliderContainer>
      )}
    </>
  );
};

export default Slider;

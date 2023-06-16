import { Box, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import { images } from "../../lib/constants";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <Box position="relative">
      <img
        src={currentImage}
        style={{
          width: "100%",
          height: "35vh",
          marginBottom: "2%",
          objectFit: "cover",
          transition: "opacity 10s ease-in-out",
        }}
        alt="slider"
      />

      <IconButton
        onClick={handlePreviousImage}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          backgroundColor: "white",
          marginLeft: "5%",
        }}
      >
        <NavigateBefore />
      </IconButton>
      <IconButton
        onClick={handleNextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "white",
          marginRight: "5%",
        }}
      >
        <NavigateNext />
      </IconButton>
    </Box>
  );
};

export default Slider;

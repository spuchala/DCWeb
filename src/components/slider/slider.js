import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import sliderImagesConfig from "../../config/sliderImagesConfig";
import "./slider.css";

const Slider = () => {
  const [activeBgImageIndex, setActiveBgImageIndex] = useState(0);

  useEffect(() => {
    const bgImageInterval = setInterval(() => {
      setActiveBgImageIndex(
        activeBgImageIndex === sliderImagesConfig.length - 1
          ? 0
          : activeBgImageIndex + 1
      );
    }, 4000);
    return () => clearInterval(bgImageInterval);
  }, [activeBgImageIndex]);

  const activeBgImageConfig = sliderImagesConfig[activeBgImageIndex];
  const { image, textOnBackGroundColor, color, title } = activeBgImageConfig;

  return (
    <div className="sliderContainer">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "250px",
        }}
      >
        {!textOnBackGroundColor && (
          <div>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <Typography
              variant="h4"
              className={color === "white" ? "headingWhite" : "headingBlack"}
            >
              {title}
            </Typography>
          </div>
        )}
        {textOnBackGroundColor && (
          <div style={{ textAlign: "center" }}>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <div className="aboutContainer">
              <p className="headingWhiteXtraSmall">{title}</p>
              <Button variant="contained" color="secondary">
                Know More
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;

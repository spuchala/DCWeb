import React, { useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import googlePlayImage from "../../assets/images/google-play-badge.png";
import appleStoreImage from "../../assets/images/appstore.png";
import mobileImagesConfig from "../../config/mobileImagesConfig";
import "./mobileSlider.css";

const MobileSlider = () => {
  const [activeBgImageIndex, setActiveBgImageIndex] = useState(0);

  useEffect(() => {
    const bgImageInterval = setInterval(() => {
      setActiveBgImageIndex(
        activeBgImageIndex === mobileImagesConfig.length - 1
          ? 0
          : activeBgImageIndex + 1
      );
    }, 4000);
    return () => clearInterval(bgImageInterval);
  }, [activeBgImageIndex]);

  const activeBgImageConfig = mobileImagesConfig[activeBgImageIndex];
  const { image } = activeBgImageConfig;

  return (
    <Fragment>
      <Grid container className="gridContainer">
        <Grid item xs={6}>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=io.cordova.myappa8b78f&hl=en"
          >
            <img src={googlePlayImage} alt="Android app on Google Play" />
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            target="_blank"
            href="https://itunes.apple.com/us/app/giggles-child-care/id1097089113?mt=8"
          >
            <img src={appleStoreImage} alt="Download on App Store" />
          </a>
        </Grid>
      </Grid>
      <img src={image} alt="Download on App Store" />
    </Fragment>
  );
};
export default MobileSlider;

import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import "./home.css";
import Slider from "../../../components/slider/slider";
import CustomCard from "../../../components/customCard/customCard";
import PublicIcon from "@material-ui/icons/Public";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Button from "@material-ui/core/Button";
import MobileSlider from "../../../components/mobileSlider/mobileSlider";

const Home = () => {
  return (
    <Fragment>
      <Slider></Slider>
      <div className="whyUseContainer">
        <Grid container>
          <Grid item xs={12}>
            <p className="headingPinkSmall">Why use GigglesWare</p>
          </Grid>
        </Grid>
        <Grid container className="gridContainer">
          <Grid item sm={4}>
            <CustomCard
              title="One stop destination"
              description="Use GigglesWare! to fill in and track daily reports sheets for daily attendance, activities like naps, foods, pottys and other infant/kid activities."
              icon={<PublicIcon color="secondary" fontSize="large" />}
            />
          </Grid>
          <Grid item sm={4}>
            <CustomCard
              title="Saves you time"
              description="With GigglesWare! you eliminate paper by tracking reports/sheets and analyzing them through graphs and charts so you concentrate on important things i.e.Kids"
              icon={<AccessAlarmIcon color="secondary" fontSize="large" />}
            />
          </Grid>
          <Grid item sm={4}>
            <CustomCard
              title="Report almost anything"
              description="Report any kind of activity like attendance, naps, foods etc. We are working hard on gathering and will be coming up with new reports, charts on a constant basis."
              icon={<LibraryBooksIcon color="secondary" fontSize="large" />}
            />
          </Grid>
        </Grid>
      </div>
      <div className="sectionDark">
        <div className="dayCareParentContainer">
          <span className="headingWhiteSmall">For Family DayCare</span>
          <p className="headingWhiteXtraSmall">
            Register your family day care with us one time. Add any number of
            kids to the day care. Manage their reports and daily sheets for all
            daily activities. Moniter the kids attendance. Search and analyze
            the reports for improvements.
          </p>
          <Button variant="contained" color="secondary">
            Register as Family Daycare
          </Button>
        </div>
      </div>
      <div className="sectionGrey">
        {" "}
        <div className="dayCareParentContainer">
          <span className="headingPinkSmall">For Parents</span>
          <p className="headingBlackXtraSmall">
            As a Parent, search for your email provided to the day care and
            create an account with us for one time. You will be able to access
            your kids daily reports, activities sheets and other information.
            Emails about the same will be send at the end of the day.
          </p>
          <Button variant="contained" color="secondary">
            Register as Parent
          </Button>
        </div>
      </div>
      <div className="aboutSectionWhite">
        <span className="headingPinkSmall">Desktop not enough?</span>
        <br />
        <br />
        <span className="headingBlackXtraSmall">
          What better way to access GigglesWare on the run than using our Mobile
          Apps!
          <br />
          <span className="headingBlackXtraSmall">
            Check Out out Android App and Apple iPhone App
          </span>
        </span>
        <br />
        <br />
        <MobileSlider />
      </div>
    </Fragment>
  );
};
export default Home;

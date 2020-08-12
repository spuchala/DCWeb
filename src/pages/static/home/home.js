import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import "./home.css";
import Slider from "../../../components/slider/slider";
import CustomCard from "../../../components/customCard/customCard";
import PublicIcon from "@material-ui/icons/Public";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

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
    </Fragment>
  );
};
export default Home;

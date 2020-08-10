import mainImage from "../assets/images/Main.png";
import profileImage from "../assets/images/Profile.png";
import alexaImage from "../assets/images/Alexa.png";
import customReportImage from "../assets/images/CustomReport.png";
import instantLogImage from "../assets/images/InstantLog.png";

const sliderImagesConfig = [
  {
    id: 0,
    image: mainImage,
    title: "One stop solution for Family Day Care Management",
    show: false,
    color: "white",
    textOnBackGroundColor: false,
  },
  {
    id: 1,
    image: profileImage,
    title: "Get a free public facing website to promote and share your daycare",
    show: false,
    color: "black",
    knowMore: "features/dvProfile",
    knowMoreText: "Know More",
    textOnBackGroundColor: true,
  },
  {
    id: 2,
    image: alexaImage,
    title:
      "Alexa + GigglesWare = Handsfree assistant to log kids activities with commands and ask Alexa for kids reports",
    show: false,
    color: "black",
    knowMore: "features/dvAlexa",
    knowMoreText: "Know More",
    textOnBackGroundColor: true,
  },
  {
    id: 3,
    image: customReportImage,
    title: "Create Custom Reports for Kids Now",
    show: false,
    color: "black",
    knowMore: "features/dvCustomReport",
    knowMoreText: "Know More",
    textOnBackGroundColor: false,
  },
  {
    id: 4,
    image: instantLogImage,
    title:
      "Now you can instantly log or report kids activities using Instant Log feature",
    show: false,
    color: "black",
    knowMore: "features/dvInstantLog",
    knowMoreText: "Know More",
    textOnBackGroundColor: true,
  },
];

export default sliderImagesConfig;

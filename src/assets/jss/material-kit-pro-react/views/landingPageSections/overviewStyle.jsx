import {
  container,
  mlAuto,
  mrAuto,
  title,
  cardTitle,
  description,
  sectionDark
} from "assets/jss/material-kit-pro-react.jsx";

const overviewStyle = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  paddedSection: {
    padding: "80px 0"
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  sectionDark: {
    ...sectionDark,
    backgroundSize: "550% 450%",
    "& $title, & $cardTitle": {
      color: "#FCFCFC"
    },
    "& $cardCategory": {
      color: "rgba(255, 255, 255, 0.5) !important"
    },
    "& $cardDescription": {
      color: "rgba(255, 255, 255, 0.76) !important"
    }
  }
};

export default overviewStyle;

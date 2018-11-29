import {
  container,
  mlAuto,
  mrAuto,
  title,
  cardTitle,
  description,
  sectionDark
} from "assets/jss/material-kit-pro-react.jsx";

const videoStyle = {
  container,
  mlAuto,
  mrAuto,
  description,
  cardTitle,
  title: {
    ...title,
    marginBottom: "60px"
  },
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
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "56.25%"
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  },
  signUpButton: {
    fontSize: "32px",
    color: "#2A2C2B",
    background: "#FCFCFC",
    marginTop: "60px",
    "&:hover": {
      color: "#FCFCFC",
      background: "#2A2C2B",
      boxShadow: "0px 0px 15px 5px rgba(255, 255, 255, 0.26)",
    }
  }
};

export default videoStyle;

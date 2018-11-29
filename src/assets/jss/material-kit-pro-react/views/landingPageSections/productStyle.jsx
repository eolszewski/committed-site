import {
  container,
  mlAuto,
  mrAuto,
  title,
  cardTitle,
  description
} from "assets/jss/material-kit-pro-react.jsx";

const productStyle = {
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
    padding: "80px 0",
    "& hr": {
      margin: "70px auto",
      maxWidth: "970px"
    }
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  info: {
    padding: "0"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  flex: {
    display: "flex"
  }
};

export default productStyle;

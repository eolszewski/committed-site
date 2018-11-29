import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import whyStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/whyStyle.jsx";

import landingWhy from "assets/img/landing-why.png";

class SectionWhy extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div
          className={classes.topPaddedSection}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  {/* TODO: Remove inline styling */}
                  <a href="/blog" style={{ textDecoration: "underline", color: "#2A2C2B" }}>Why did we start this company?</a>
                </h2>
              </GridItem>
              <GridItem xs={9} sm={5} md={5}>
                {/* TODO: Remove inline styling */}
                <Card style={{ boxShadow: "none", marginBottom: "0px" }}>
                  <img
                    src={landingWhy}
                    alt="Card-img-cap"
                  />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(whyStyle)(SectionWhy);

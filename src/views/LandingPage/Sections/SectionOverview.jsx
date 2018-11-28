import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import overviewStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/overviewStyle.jsx";

import landingHeader from "assets/img/landing-header.png";

class SectionOverview extends React.Component {
  render () {
    const { classes, ...rest } = this.props;
    return(
      <div className="cd-section" {...rest}>
        <div
          className={`${classes.paddedSection} ${classes.sectionDark}`}
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
                  Commit to something in your workplace.
                </h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <img
                    src={landingHeader}
                    alt="Card-img-cap"
                  />
                </Card>
              </GridItem>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  A digital coach that your team can afford.
                </h2>
                <h5 className={classes.description}>
                  We want to get better, but with the constant firehose of information in the world today, it can be hard to figure out where to begin and keep focused to in order to stay on track.
                  
                  Committed is a platform for continuous improvement and understanding of oneself.
                  
                  It is like having a personal coach and team who are helping you and holding you accountable.  
                </h5>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(overviewStyle)(SectionOverview);

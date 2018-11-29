import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";

import overviewStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/overviewStyle.jsx";

import landingHeader from "assets/img/landing-header.png";
import landingHeaderMobile from "assets/img/landing-header-mobile.png";

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
                sm={10}
                md={10}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  The best investment you can make is in your people.
                </h2>
              </GridItem>
              {window.innerWidth >= 900 &&
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <img
                      src={landingHeader}
                      alt="Card-img-cap"
                      className={classes.headerImg}
                    />
                  </Card>
                </GridItem>
              }
              {window.innerWidth < 900 &&
                <GridItem xs={6} sm={6} md={6}>
                  <Card>
                    <img
                    src={landingHeaderMobile}
                      alt="Card-img-cap"
                      className={classes.headerImg}
                    />
                  </Card>
                </GridItem>
              }
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  Commit to better humans in your workplace.
                </h2>
                <h4 className={classes.description}>
                  We want to get better, but with the constant firehose of information in the world today, it can be hard to figure out where to begin and keep focused to stay on track.
                  <br /><br />
                  So, we turn to motivational speakers, process consultants, leadership retreats, etc... for guidance - but the effects often wane shortly thereafter.
                  <br /><br />
                  We believe that real improvement comes from proactive commitment, not one-off interventions.
                  <br /><br />
                  Committed is a platform for continuously improving your team and understanding their potential.
                </h4>
                <Button color="primary" onClick={() => window.open('https://goo.gl/forms/4kttv9Ig6uiibswy1')} className={classes.signUpButton}>
                  Let Us Hold You Accountable
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(overviewStyle)(SectionOverview);

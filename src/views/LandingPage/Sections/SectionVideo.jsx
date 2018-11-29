import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import videoStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/videoStyle.jsx";

class SectionVideo extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
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
                <h2 className={classes.title}>Your small amount of commitment adds up.</h2>
                <div className={classes.videoContainer}>
                  <iframe src="https://www.youtube.com/embed/_HEnohs6yYw" title="The Choice" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className={classes.video} allowFullScreen></iframe>
                </div>
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

export default withStyles(videoStyle)(SectionVideo);

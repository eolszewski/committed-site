import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CardBody from "components/Card/CardBody.jsx";
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
                  Commit to being human in your workplace.
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
                sm={10}
                md={10}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  A digital coach that your team can afford.
                </h2>
                <h4 className={classes.description}>
                  We want to get better, but with the constant firehose of information in the world today, it can be hard to figure out where to begin and keep focused to in order to stay on track.
                  <br /><br />
                  Committed is a platform for continuous improvement and understanding of oneself.
                  <br /><br />
                  It is like having a personal coach and team who are helping you and holding you accountable.  
                </h4>
              </GridItem>
                <GridItem 
                xs={12}
                sm={10}
                md={10}>
                <Card raised className={classes.textCenter}>
                  <CardBody>
                    <form>
                      <CustomInput
                        labelText="Email address"
                        id="float"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Any Comments?"
                        id="float"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 2
                        }}
                      />
                      <div className={classes.textCenter}>
                        <p>We are launching soon with a few select businesses and individuals who are willing to commit to making their workplace more human. If what we are doing resonates with you, please leave us a comment about your experience and what you would like to see improved most.</p>
                        <Button color="primary">
                          Get Early Access
                      </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>    
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(overviewStyle)(SectionOverview);

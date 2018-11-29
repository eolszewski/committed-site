import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Done from "@material-ui/icons/Done";
import People from "@material-ui/icons/People";
import Star from "@material-ui/icons/Star";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

// assets for this page
import committedCanvas from "assets/img/committed-canvas.png";

class SectionProduct extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div className={classes.paddedSection}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>
                  The platform for real-world skills.
                </h2>
                <h5 className={classes.description}>
                  Get business insights informed by employee characteristics.
              </h5>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} className={classes.flex}>
                <Card
                  background
                  style={{ backgroundImage: `url(${committedCanvas})` }}
                >
                  <CardBody background className={classes.center}>
                    <a href="#dashboard" onClick={e => e.preventDefault}>
                      <h3 className={classes.cardTitle}>We Support You</h3>
                      <p className={classes.cardDescription}>
                        You don’t have to worry about where to start and what to do.
                      </p>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} className={classes.mrAuto}>
                <InfoArea
                  className={classes.info}
                  title="Get Action"
                  description="You tell us what you want to improve, and we program it all for you - no more information overload or looking for the one thing to change you."
                  icon={Done}
                  iconColor="gray"
                />
                <InfoArea
                  className={classes.info}
                  title="Get Accountability"
                  description="Connect with people based on shared values instead of just shared hard skills. This will open the door for more meaningful connections in a world where connectivity is slowly fading out."
                  icon={People}
                  iconColor="gray"
                />
                <InfoArea
                  className={classes.info}
                  title="Get Growth"
                  description="We take it further by showing our work and how people develop throughout the process with various ‘affirmations’ and ‘gifts’. On top of this, the platform is much less expensive than a personal coach."
                  icon={Star}
                  iconColor="gray"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);

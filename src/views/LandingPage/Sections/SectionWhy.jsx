import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import whyStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/whyStyle.jsx";

class SectionWhy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>
              <a href="/blog">Why did we start this company?</a>
            </h2>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <CustomInput
              labelText="Your Name"
              id="name"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(whyStyle)(SectionWhy);

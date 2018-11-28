import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionOverview from "./Sections/SectionOverview.jsx";
import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionVideo from "./Sections/SectionVideo.jsx";
import SectionWhy from "./Sections/SectionWhy.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.main}>
          <SectionOverview />
          <SectionProduct />
          <SectionVideo />
          <SectionWhy />
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/blog"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Made with{" "} <Favorite className={classes.icon} /> in Austin, TX.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);

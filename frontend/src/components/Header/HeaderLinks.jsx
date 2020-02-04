import React from "react";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes} = this.props;
  
    return (
      <div>
    
        <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={classes.buttonLink}
        >
          <Dashboard
            className={
              classes.headerLinksSvg +
              " " +
              classes.links
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {"Dashboard"}
            </span>
          </Hidden>
        </Button>

        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          className={classes.buttonLink}
        >
          <ExitToAppIcon
            className={
              classes.headerLinksSvg +
              " " +
              classes.links
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {"Log Out"}
            </span>
          </Hidden>
        </Button>
      </div>
    );
  
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerLinksStyle)(HeaderLinks);

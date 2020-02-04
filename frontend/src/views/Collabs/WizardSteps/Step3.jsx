import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  ...customSelectStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false
    };
  }
  sendState() {
    return this.state;
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isValidated() {
    return true;
  }
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <CustomInput
          labelText={
            <span>
              Hashtags Requested <small>(Include any branded hashtag you wish to include in the influencer post)</small>
            </span>
          }
            id="hashTagRequested"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12}>
          <CustomInput
           labelText={
            <span>
              Geotag Requested <small>(Where should the influencer check in as their post location?)</small>
            </span>
          }
            id="geotag"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12}>
          <CustomInput
          labelText={
            <span>
              @Tag Requested <small>(Include your business instagram handle to be tagged in images or post captions)</small>
            </span>
          }
            id="tag"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12}>
          <CustomInput
            labelText={
              <span>
                Additional Custom Requirement <small>(This is your opportunity to add specific content to the post)</small>
              </span>
            }
            id="additional"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>

      </GridContainer>
    );
  }
}

export default withStyles(style)(Step3);

import React from "react";

// @material-ui/icons
import DescriptionIcon from '@material-ui/icons/Description';
import TitleIcon from '@material-ui/icons/Title';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleState: "",
      details: "",
      detailsState: "",
    };
  }

  sendState() {
    return this.state;
  }


  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }

  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }

  isValidated() {
    if (
      this.state.titleState === "success" &&
      this.state.detailsState === "success"
    ) {
      return true;
    } else {
      if (this.state.titleState !== "success") {
        this.setState({ titleState: "error" });
      }
      if (this.state.detailsState !== "success") {
        this.setState({ detailsState: "error" });
      }
    }
    return false;
  }

  render() {

    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <PictureUpload />
        </GridItem>
      
        <GridItem xs={12} sm={12} md={12} lg={10}>

          <CustomInput
            success={this.state.titleState === "success"}
            error={this.state.titleState === "error"}
            labelText={
              <span>
                Collab Title <small>(Give a title to your influencer campaign collaboration)</small>
              </span>
            }
            id="title"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "title", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <TitleIcon className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={10}>

          <CustomInput
            success={this.state.detailsState === "success"}
            error={this.state.detailsState === "error"}
            labelText={
              <span>
                Collab Details <small>(Add a description to your offering e.g. Precious Stone Necklace)</small>
              </span>
            }
            id="details"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "details", "length", 5),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <DescriptionIcon className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>

      </GridContainer>
    );

  }
}

export default withStyles(style)(Step1);

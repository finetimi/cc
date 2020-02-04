import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";

import Makeup from "assets/img/icons/makeup.png";
import Family from "assets/img/icons/family.png";
import Fashion from "assets/img/icons/fashion.png";
import Fitness from "assets/img/icons/fitness.png";
import Food from "assets/img/icons/food.png";
import Event from "assets/img/icons/event.png";


const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

const genMenuItem = (classes) => {
  const menuItems = [];
  for (let i = 1; i <= 50; i++){
    menuItems.push(
      <MenuItem
        key={i}
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value={i}
      >
        {i}
      </MenuItem>
    )
  }
  return menuItems;
};

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retailValue: "",
      availableCollabs: "",
      checkedCategory: "",
    };
  }
  sendState() {
    return this.state;
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = name => event => {
    const value = this.state.category === name ? "" : name;

    this.setState({ category: value });
  };
  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>Choose a category</h4>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <GridContainer>

              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("beauty")}
                    checkedIcon={
                      <img src={Makeup} style={{height: 80}} alt="..."/>
                    }
                    icon={
                      <img src={Makeup} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "beauty" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  
                  <h6>Beauty</h6>
                </div>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("family")}
                    checkedIcon={
                      <img src={Family} style={{height: 80}} alt="..."/>                      
                    }
                    icon={
                      <img src={Family} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "family" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Family</h6>
                </div>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("fashion")}
                    checkedIcon={
                      <img src={Fashion} style={{height: 80}} alt="..."/>
                    }
                    icon={
                      <img src={Fashion} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "fashion" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Fashion</h6>
                </div>
              </GridItem>



              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("fitness")}
                    checkedIcon={
                      <img src={Fitness} style={{height: 80}} alt="..."/>

                    }
                    icon={
                      <img src={Fitness} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "fitness" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Fitness</h6>
                </div>
              </GridItem>


              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("food")}
                    checkedIcon={
                      <img src={Food} style={{height: 80}} alt="..."/>
                    }
                    icon={
                      <img src={Food} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "food" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Food</h6>
                </div>
              </GridItem>


              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("event")}
                    checkedIcon={
                      <img src={Event} style={{height: 80}} alt="..."/>
                    }
                    icon={
                      <img src={Event} style={{height: 80}} alt="..."/>
                    }
                    classes={{
                      checked: this.state.category === "event" && classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Event</h6>
                </div>
              </GridItem>


              <GridItem
                xs={12} 
                sm={6}>
                
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="availableCollabs"
                    className={classes.selectLabel}
                  >
                    Available Collabs
                  </InputLabel>

                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.availableCollabs}
                    onChange={this.handleSelect}
                    inputProps={{
                      name: "availableCollabs",
                      id: "availableCollabs"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                     Available Collabs
                    </MenuItem>
                    {genMenuItem(classes)}
                  </Select>
                </FormControl>

              </GridItem>

              <GridItem
                xs={12} 
                sm={6}>
                
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="retailValue"
                    className={classes.selectLabel}
                  >
                    Choose Retail Value
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.retailValue}
                    onChange={this.handleSelect}
                    inputProps={{
                      name: "retailValue",
                      id: "retailValue"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Retail Value
                    </MenuItem>

                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$10 -$30"
                    >
                      $10 -$30
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$31 - $50"
                    >
                      $31 -$ 50
                    </MenuItem>

                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$51 - $100"
                    >
                      $51 - $100
                    </MenuItem>

                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$101 - $250"
                    >
                      $101 - $250
                    </MenuItem>

                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$251 - $500"
                    >
                      $251 - $500
                    </MenuItem>

                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="$500+"
                    >
                      $500+
                    </MenuItem>

                  </Select>
                </FormControl>
              </GridItem>



            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Step2);

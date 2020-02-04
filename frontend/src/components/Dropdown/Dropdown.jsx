import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

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
  };

class Dropdown extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedValue: "",
      };
    }
 
    handleSelect = event => {
      this.setState({ selectedValue: event.target.value });
    };


    render(){
        const { classes, inputLabel, name, defaultMenuItem }  = this.props;
        const items = this.props.items ? this.props.items : [];

        return (
            <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor={name}
                    className={classes.selectLabel}
                  >
                    {inputLabel}
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.selectedValue}
                    onChange={this.handleSelect}
                    inputProps={{
                      name: {name},
                      id: {name}
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      {defaultMenuItem}
                    </MenuItem>
                    {
                        items.map(item => 
                        <MenuItem
                            classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                            }}
                            value={item.value}
                            >
                            <span>{item.label}</span>
                        </MenuItem>
                        )
                    }
                  </Select>
            </FormControl>
        );
    }
};

export default withStyles(style)(Dropdown);



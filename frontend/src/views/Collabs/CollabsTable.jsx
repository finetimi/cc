import React from "react";

// 3rd party imports
import { NavLink } from 'react-router-dom';
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import AssignmentIndIcon from "@material-ui/icons/Assignment";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

class CollabsTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.transformTableData = this.transformTableData.bind(this);
    this.state = {
        alert: null,
        checked: [],
        tableData: this.transformTableData(),
      };
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  titleAndTextAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="1234567890987"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          COLLAB VOUCHER
        </SweetAlert>
      )
    });
  }

  transformTableData(){
      const { classes, tableData } = this.props;
      const data = tableData.map(({
          id,
          title,
          category,
          image,
          retailValue,
          availableCollabs
      }) => {
        const navLink =`/collab-details/${id}`;

        return [
          <NavLink to={navLink}>
          <div className={classes.imgContainer}>
            <img src={image} alt="..." className={classes.img} />
          </div>
          </NavLink>,
          <span>
            <NavLink to={navLink}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {title}{" "}
            </a>
            <br />
            </NavLink>
            <Button
                onClick={this.titleAndTextAlert.bind(this)}
                color="rose"
                size="sm"
                round
                simple
              >
                VOUCHER
              </Button>
          </span>,
               <Button
               fullWidth
                color="rose"
                size="sm"
                round
              >
                {category}
              </Button>,
          "1,000",
          <span>
            <small className={classes.tdNumberSmall}></small> {retailValue}
          </span>,
          <span>
            {availableCollabs}
            <div className={classes.buttonGroup}>
              <Button
                color="info"
                size="sm"
                round
                className={classes.firstButton}
              >
                <Remove className={classes.icon} />
              </Button>
              <Button
                color="info"
                size="sm"
                round
                className={classes.lastButton}
              >
                <Add className={classes.icon} />
              </Button>
            </div>
          </span>,
          <Button simple className={classes.actionButton}>
            <Close className={classes.icon} />
          </Button>
        ]
      })

      return data;
  }

  
  render() {
    const { classes, tableHead, title } = this.props;

    return (
      <React.Fragment>
        {this.state.alert}
      
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="info">
                  <AssignmentIndIcon />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  {title}
                </h4>
              </CardHeader>

              <CardBody>
                <Table
                  tableHead={tableHead}
                  tableData={[
                    ...this.state.tableData,
                  ]}
                  tableShopping
                  customHeadCellClasses={[
                    classes.center,
                    classes.description,
                    classes.description,
                    classes.right,
                    classes.right,
                    classes.right
                  ]}
                  customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont,
                    classes.customFont,
                    classes.tdNumber,
                    classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                    classes.tdNumber
                  ]}
                  customClassesForCells={[1, 2, 3, 4, 5, 6]}
                />
              </CardBody>
            </Card>

          </GridItem>
        </GridContainer>
      </React.Fragment>
    );
  }
};

export default withStyles(extendedTablesStyle)(CollabsTable);

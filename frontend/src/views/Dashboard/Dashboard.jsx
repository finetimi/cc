import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import ArtTrack from "@material-ui/icons/ArtTrack";
import LocationOnIcon from '@material-ui/icons/LocationOn';

// core components
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CloseIcon from '@material-ui/icons/Close';

import {
  emailsSubscriptionChart,
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


import { COLLABS } from '../data';

const us_flag = require("assets/img/flags/US.png");


var mapData = {
  'US-FL': 760,
  'US-NY': 550,
  'US-CA': 120,
  'US-TX': 1300,
  'US-IL': 1450,
};



class Dashboard extends React.Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {

    const { classes } = this.props;

    return (

      <div>
    
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="info">
                  <LocationOnIcon />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Top Audience Locations
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={5}>
                    <Table
                      tableData={[
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "Tampa",
                          "23.23%"
                        ],
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "New York",
                          "20.43%"
                        ],
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "Los Angeles",
                          "10.35%"
                        ],
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "Fort Worth",
                          "7.87%"
                        ],
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "Chicago",
                          "5.94%"
                        ],
                      ]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <VectorMap
                      map={"us_aea"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "280px"
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial"
                          }
                        ]
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="info">

                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>

              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Age Range</h4>
                <p className={classes.cardCategory}>
                  Top Audience Age Range
                </p>
              </CardBody>
              
            </Card>
          </GridItem>

        </GridContainer>
       
        <h3 className={classes.cardTitle}> Latest Collabs</h3>
        <br />

        <GridContainer>
          {
            COLLABS.map(({
              image,
              id,
              title,
              description,
              availableCollabs,
              retailValue
            }) => (

              <GridItem xs={12} sm={12} md={4}>
                <Card product className={classes.collab}>
                  <CardHeader image className={classes.cardHeaderHover}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={image} alt="..." />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <div className={classes.cardHoverUnder}>
                      <Tooltip
                        id="tooltip-top"
                        title="View"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="transparent" simple justIcon>
                          <ArtTrack className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        id="tooltip-top"
                        title="Edit"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="success" simple justIcon>
                          <Edit className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        id="tooltip-top"
                        title="Remove"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button color="danger" simple justIcon>
                          <CloseIcon className={classes.underChartIcons} />
                        </Button>
                      </Tooltip>
                    </div>
                    <h4 className={classes.cardProductTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {title}
                      </a>
                    </h4>
                    <p className={classes.cardProductDesciprion}>
                      {description.length < 80 ? description : description.substr(0, 80) + '...'}
                    </p>
                  </CardBody>
                  <CardFooter product>
                    <div className={classes.price}>
                      <h4>{retailValue}</h4>
                    </div>
                    <div className={`${classes.stats} ${classes.productStats}`}>
                      <AssignmentIndIcon /> {availableCollabs}
                    </div>
                  </CardFooter>
                </Card>
          </GridItem>
            ))
          }
          
        </GridContainer>
      </div>

    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { COLLABS } from 'views/data';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.jsx";

import Makeup from "assets/img/icons/makeup.png";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const collab = COLLABS[0];

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#3C4858",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  iconPadding: {
    paddingTop: "0 3px",
  }
};

class Widgets extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "takenCollabs": 3,
      "availableCollabs": 50
    };
    this.handleAvailableCollabs = this.handleAvailableCollabs.bind(this);
  }

  handleAvailableCollabs(action){
    const { availableCollabs } = this.state;
    const newValue = action === "plus" ? availableCollabs + 1 : availableCollabs - 1;

    this.setState({
      availableCollabs: newValue
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>

      <GridContainer>
        <GridItem xs={12} sm={12} >
          <h2 style={{margin: 0, fontWeight: 500}}>{collab.title}</h2>
        </GridItem>
      </GridContainer>

        <GridContainer>

          <GridItem xs={12} sm={12} md={4}>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>CATEGORY</h6>
                        <div className={classes.icon}>
                            <img src={Makeup} style={{height: 80, marginLeft: 24, marginTop: -48}} alt="..."/>
                        </div>
                        <Button disabled size="sm" round color="rose">
                            {collab.category}
                        </Button>
                    </CardBody>
                </Card>
              </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <GridItem xs={6} sm={12} md={12}>
                      <Button style={{marginHorizontal: 17}} size="lg" fullWidth color="info">
                          View Influencers
                      </Button>
                    </GridItem>
                </GridItem>
              </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12} md={8}>
              <img src={collab.image}
                alt={'collab'} 
                style={{
                    border: "3px solid white",
                    width: '100%',
                    height: 'auto',
                    borderRadius: 10,
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
                }} 
                />
          </GridItem>
        </GridContainer>

        <GridContainer>
            <GridItem xs={12} sm={4} lg={4}>
                <Card>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>AVAILABLE COLLABS</h6>
                      
                        <div className={classes.icon}>
                            <div>
                              <h6 style={{fontSize: 40, marginLeft: 28, marginTop: 38}}>
                                {this.state.takenCollabs}/{this.state.availableCollabs} 
                              </h6>
                            </div>
                        </div>

                        <div className={classes.buttonGroup}>
                          <Button size="lg" color={"info"} simple justIcon>
                            <Remove simple onClick={()=>this.handleAvailableCollabs("minus")} style={{fontSize: 30}} />
                          </Button>
                            
                            <Button size="lg" color={"info"} simple justIcon>
                              <Add onClick={()=>this.handleAvailableCollabs("plus")} style={{fontSize: 30}}/>
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem  xs={12} sm={4} lg={4}>
                <Card style={{minHeight: 263}}>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>RETAIL VALUE</h6>

                        <div className={classes.icon}>
                          <h6 style={{fontSize: 21, marginLeft: 13, marginTop: 50}}> 
                             {collab.retailValue}
                          </h6>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={4} lg={4}>
                <Card>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>AVAILABLE COLLABS</h6>
                      
                        <div className={classes.icon}>
                            <div>
                              <h6 style={{fontSize: 40, marginLeft: 28, marginTop: 38}}>
                                {this.state.takenCollabs}/{this.state.availableCollabs} 
                              </h6>
                            </div>
                        </div>

                        <div className={classes.buttonGroup}>
                          <Button size="lg" color={"info"} simple justIcon>
                            <Remove simple onClick={()=>this.handleAvailableCollabs("minus")} style={{fontSize: 30}} />
                          </Button>
                            
                            <Button size="lg" color={"info"} simple justIcon>
                              <Add onClick={()=>this.handleAvailableCollabs("plus")} style={{fontSize: 30}}/>
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </GridItem>

        </GridContainer>

        <GridContainer>
            <GridItem xs={12} sm={6}>
                <Card style={{
                    marginTop: 0, 
                    color: "#292A2B", 
                    backgroundColor: "#D6EDFF",
                    fontWeight: 600,
                    }}>
                    <CardHeader style={{color: "rgba(0,0,0,.38)", marginBottom: -25}}>
                        <GridContainer direction="row">
                            <h6 className={classes.cardCategory}>COLLAB REQUIREMENTS</h6>
                        </GridContainer>
                    </CardHeader>
                    <CardBody style={{maxHeight:183, overflowY: "scroll"}}>
                        <p> <CheckCircleIcon /> Two Instagram Posts</p>
                        <p> <CheckCircleIcon/> One Instagram Story</p>
                    </CardBody>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={6}>
                <Card style={{
                    marginTop: 0, 
                    color: "#292A2B", 
                    backgroundColor: "#D6EDFF",
                    fontWeight: 600,
                    }}>
                    <CardHeader style={{color: "rgba(0,0,0,.38)", marginBottom: -25}}>
                        <GridContainer direction="row">
                            <h6 className={classes.cardCategory}>POST REQUIREMENTS</h6>
                        </GridContainer>
                    </CardHeader>
                    <CardBody style={{maxHeight:183, overflowY: "scroll"}}>
                      <p> <CheckCircleIcon classes={{ iconPadding: 'flow-icon' }} /> Use the hashtag #TABABE #threadappeal</p>
                      <p> <CheckCircleIcon /> Check in at 2452 Central Avenue, St. Petersburg</p>
                      <p> <CheckCircleIcon /> Tag in @threadappeal on photo and in caption</p>
                    </CardBody>
                </Card>
              </GridItem>
        </GridContainer>

        <GridContainer>
            <GridItem xs={12} sm={12}>
                <Card style={{
                    marginTop: 0, 
                    color: "#292A2B", 
                    backgroundColor: "#D6EDFF",
                    fontWeight: 600,
                    }}>
                    <CardHeader style={{color: "rgba(0,0,0,.38)", marginBottom: -25}}>
                        <GridContainer direction="row">
                            <h6 className={classes.cardCategory}>DETAILS</h6>
                        </GridContainer>
                    </CardHeader>
                    <CardBody style={{maxHeight:183, overflowY: "scroll"}}>
                        <p>
                            {collab.description}
                        </p>
                    </CardBody>
                </Card>
              </GridItem>
        </GridContainer>
      </div>
    );
  }
};

export default withStyles(styles)(Widgets);

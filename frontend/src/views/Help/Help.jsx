
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Timeline from "components/Timeline/Timeline.jsx";
import ChatIcon from '@material-ui/icons/Chat';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.jsx";

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
    color: "#999999",
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
  }
};

const questions = [
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "What is a good offering for an influencer collab?",
        titleColor: "info",
        body: (
        <div>
            <p>
            The goal is to highlight a key product or sevice of your business. You'll want to give your influencer something of true value they can create a story to tell their followers. 
            </p>
            <p>
            The minimum value must be at least $10 and fulfilled within 30 days. 
            Pick something that will create a great visual so you get content that represents your business.
            This could be admission to a fitness class, a gift card to dine, a beauty product,an article of clothing or jewelry,
            or a local event ticket for example.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "Can I request a specific influencer?",
        titleColor: "info",
        body: (
        <div>
            <p>
                At this time, you cannot select specific influencers in order to organically attract people who genuinely want to work with your brand.
            </p>
            <p>
                We prescreen and categorize all influencers in order to ensure your
                business gets visibility with the influencers who would be most beneficial to promote your business.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "Can I request a specific influencer?",
        titleColor: "info",
        body: (
        <div>
            <p>
                How long does the influencer have to complete my collab?
            </p>
            <p>
            Once your collab is claimed, they will have 30 days to claim, execute, and verify their collab results.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "Can I use the images from the collab?",
        titleColor: "info",
        body: (
        <div>
            <p>
            You can reshare the images or videos created if and only if you give credit to the influencer on the post.
            You will need to ask permission from the influencer prior to resharing.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "What happens if the influencer claims my collab but does not complete it?",
        titleColor: "info",
        body: (
        <div>
            <p>
                If your collab is claimed and not executed, 
                it will be released back to the platform after the 30 day completion period - or sooner if the influencer cancels the collabs.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "Can I pay an influencer for a collab?",
        titleColor: "info",
        body: (
        <div>
            <p>
            All collabs will be negotiated in trade for a service or product at this time.
            If you want to execute a paid collab, please contact info@createcollabs.com so we can create a custom campaign.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "How will I know when the collab is completed?",
        titleColor: "info",
        body: (
        <div>
            <p>
            Once the influencer completes your collab, they will provide verification to the platform to show their results.
            That verification will prompt a notirication to your profile and email that it has been completed.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "How will the posts/stories by verified that they are completed correctly?",
        titleColor: "info",
        body: (
        <div>
            <p>
            Following the influencer completing your collab,
            they will input the post link and upload screen shots of their insights as verification.
            </p>
        </div>
        ),
    },
    {
        inverted: true,
        badgeColor: "info",
        badgeIcon: ChatIcon,
        title: "Do I own the photos or videos? Can I use them for other purposes?",
        titleColor: "info",
        body: (
        <div>
            <p>
            You do not own the photos or videos, but if the influencer allows permission to reshare them with credit you can repose them by giving credit to the influencer. 
            Soon, you will be able to purchase the images so you own them outright for other uses.
            </p>
        </div>
        ),
    },
]

class Help extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>

            <h2>Frequently Asked Questions</h2>

          <GridItem xs={12}>
            <Timeline simple stories={questions} />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Help);

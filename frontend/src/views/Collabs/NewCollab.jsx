// import react
import React from "react";

// core components
import Wizard from "./CollabWizard";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Step1 from "./WizardSteps/Step1";
import Step2 from "./WizardSteps/Step2";
import Step3 from "./WizardSteps/Step3";

class WizardView extends React.Component {
  render() {
    return (

      <GridContainer justify="center">
        <GridItem xs={12} sm={9}>
          <Wizard
            validate
            steps={[
              { stepName: "About", stepComponent: Step1, stepId: "about" },
              { stepName: "Retail Value", stepComponent: Step2, stepId: "retailValue" },
              { stepName: "Additional Details", stepComponent: Step3, stepId: "additionalDetails" }
            ]}
            title="Create a Collab"
            subtitle="Please fill in the fields below to give a detailed description of the 
                      product or service your brand will offer an influencer as part of your collaboration."
          />
        </GridItem>
      </GridContainer>

    );
  }
}

export default WizardView;

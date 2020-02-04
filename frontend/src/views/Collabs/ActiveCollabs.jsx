// react imports
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import CollabsTable from "./CollabsTable";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

import { COLLABS } from '../data';

class ActiveCollabs extends React.Component {

  render() {
    return (
      <CollabsTable
        title={"ACTIVE COLLABS"}
        tableHead={[
          "",
          "COLLAB",
          "CATEGORY",
          "IMPRESSIONS",
          "RETAIL VALUE",
          "AVAILABLE COLLABS",
        ]}
        tableData={COLLABS}
      />
    );
  }
}

export default withStyles(extendedTablesStyle)(ActiveCollabs);

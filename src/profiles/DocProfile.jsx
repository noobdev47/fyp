import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Portfolio from "../profilecomponents/Portfolio";
import TabbedSection from "../profilecomponents/TabbedSection";

const docInfo = {
  id: "1",
  pic: "https://randomuser.me/api/portraits/men/84.jpg",
  name: "doctor....",
  role: "doctor",
  status: "Not Verified",
  description: "placeholder description...",
  qualification: "placeholder qualification...",
  rating: 0,
  currentLocale: "placeholder hospital...",
  rate: 0
};

class DocProfile extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={12}>
          <Portfolio {...docInfo} />
          <TabbedSection {...docInfo}/>
        </Grid.Column>
        <Grid.Column width={3}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default DocProfile;

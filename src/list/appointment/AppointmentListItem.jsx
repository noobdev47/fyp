import React, { Component } from "react";
import { SegmentGroup, Segment, Item, Icon, Button } from "semantic-ui-react";

class AppointmentListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "doctor" };
  }
  render() {
    const { appointment } = this.props;

    const role = this.state.role;
    let button;

    if (role === "patient") {
      button = (
        <Button as="a" color="teal" floated="right" primary content="Call" />
      );
    } else {
      button = (
        <Button as="a" color="teal" floated="right" primary content="Details" />
      );
    }

    let header;

    if (role === "patient") {
      header = appointment.doctorName;
    } else {
      header = appointment.patientName;
    }

    return (
      <SegmentGroup>
        <Segment raised color="blue">
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header className="header" as="a">
                  {header}
                </Item.Header>
                {button}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <Item.Group>
            <Item.Content>
              <Icon name="clock" /> {appointment.date}
              <Icon name="marker" /> {appointment.time}
            </Item.Content>
          </Item.Group>
        </Segment>
      </SegmentGroup>
    );
  }
}

export default AppointmentListItem;

import React, { Component } from "react";
import { Segment, Item, Image, Divider, Icon, Rating } from "semantic-ui-react";

class Portfolio extends Component {
  render() {
    function rate(rating) {
      switch (rating) {
        case 0:
          return 0;
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
        case 5:
          return 5;
        default:
          return 0;
      }
    }

    return (
      <Segment raised>
        <Item.Group>
          <Item>
            <Image
              src={this.props.pic}
              size="mini"
              circular
              avatar
              floated="left"
            />
            <span className="docname">{this.props.name}</span>
            <Icon className="icon" name="exclamation" color="red" size='large' />
          </Item>
          <Divider horizontal>Qualifications</Divider>
          <Item.Description>{this.props.qualification}</Item.Description>
          <Divider horizontal>Rating</Divider>
          <Rating icon="star" defaultRating={rate} maxRating={5} disabled />
          <Divider horizontal>Description</Divider>
          <Item.Description>{this.props.description}</Item.Description>
        </Item.Group>
      </Segment>
    );
  }
}

export default Portfolio;

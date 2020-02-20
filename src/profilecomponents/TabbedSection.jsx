import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import InfoTab from "./tabcomponents/InfoTab";
import FeedbackList from "../list/feedback/FeedbackList";

const feedbacksFromTab = [
    {
      id: "1",
      pic: "https://randomuser.me/api/portraits/men/84.jpg",
      name: "placeholder name....",
      role: "patient",
      time: "placeholder time",
      reason: "placeholder reason...",
      comment: "placeholder comment..."
    },
    {
      id: "2",
      pic: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "placeholder name....",
      role: "patient",
      time: "placeholder time...",
      reason: "placeholder reason...",
      comment: "placeholder comment..."
    }
  ];

const panes = [
  { menuItem: "Info", render: () => <Tab.Pane><InfoTab /></Tab.Pane> },
  { menuItem: "Feedback", render: () => <Tab.Pane><FeedbackList feedbacks={feedbacksFromTab}/></Tab.Pane> },
  { menuItem: "FAQ", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];

class TabbedSection extends Component {
  render() {
    return (
          <Tab renderActiveOnly={true} panes={panes} />
    );
  }
}

export default TabbedSection;

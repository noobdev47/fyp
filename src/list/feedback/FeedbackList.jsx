import React, { Component, Fragment } from 'react';
import FeedbackListItem from './FeedbackListItem';

class FeedbackList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.feedbacks.map(feedback => (
                    <FeedbackListItem key={feedback.id} feedback={feedback}/>
                ))}
            </Fragment>
        );
    }
}

export default FeedbackList;
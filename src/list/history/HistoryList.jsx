import React, { Component, Fragment } from 'react';
import HistoryListItem from './HistoryListItem';

class HistoryList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.histories.map(history => (
                    <HistoryListItem key={history.id} history={history}/>
                ))}
            </Fragment>
        );
    }
}

export default HistoryList;
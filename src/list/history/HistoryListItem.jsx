import React, { Component } from 'react';
import { SegmentGroup, Segment, Item, Icon, Button } from 'semantic-ui-react';

class HistoryListItem extends Component {
    render() {
        const { history } = this.props;
        return (
            <SegmentGroup>
                <Segment color='blue'>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>{history.disease}</Item.Header>
                                <Button as='a' color='teal' floated='right' primary content='View' />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name='clock' /> {history.date}
                    </span>
                </Segment>
            </SegmentGroup>
        );
    }
}

export default HistoryListItem;
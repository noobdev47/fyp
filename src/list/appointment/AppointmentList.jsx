import React, { Component, Fragment } from 'react';
import AppointmentListItem from './AppointmentListItem';

class AppointmentList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.appointments.map(appointment => (
                    <AppointmentListItem key={appointment.id} appointment={appointment}/>
                ))}
            </Fragment>
        );
    }
}

export default AppointmentList;
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import AppointmentList from "../list/appointment/AppointmentList";
import HistoryList from "../list/history/HistoryList";

const appointmentsFromDash = [
  {
    id: "1",
    doctorName: "doctor",
    patientName: "patient",
    date: "8-2-2020",
    time: "16:48",
    description: "Pneumonia"
  },
  {
    id: "2",
    doctorName: "doctor",
    patientName: "patient",
    date: "8-2-2020",
    time: "16:48",
    description: "Dengue"
  }
];

const historyFromDash = [
  {
    id: "1",
    doctorName: "doctor",
    patientName: "patient",
    date: "6-2-2020",
    disease: "Pechus"
  },
  {
    id: "2",
    doctorName: "doctor",
    patientName: "patient",
    date: "3-2-2020",
    disease: "Raja"
  }
];

class PatientDash extends Component {
  render() {
    return (
      <Grid className='grid'>
        <Grid.Column width={10}>
          <AppointmentList appointments={appointmentsFromDash} />
        </Grid.Column>
        <Grid.Column width={6}>
          <HistoryList histories={historyFromDash} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default PatientDash;

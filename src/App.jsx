import React, { Component, Fragment } from 'react';

import './App.css';
import NavBar from './features/navbar/NavBar';
import PatientDash from './dashboards/PatientDash';
import { Container } from 'semantic-ui-react';
import DocProfile from './profiles/DocProfile';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <DocProfile />
        </Container>
      </Fragment>
    );
  }
}
export default App;

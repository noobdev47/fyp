import React, { Component, Fragment } from 'react';

import './App.css';
import NavBar from './features/navbar/NavBar';
import PatientDash from './dashboards/PatientDash';
import { Container } from 'semantic-ui-react';
import DocProfile from './profiles/DocProfile';

const rightItems = [
  { as: "a", content: "Find Doctors", key: "doctor" },
  { as: "a", content: "Find Hospitals", key: "hospital" },
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Signup", key: "signup" }
];

class App extends Component {  
  render() {
    return (
      <Fragment>
        <NavBar rightItems={rightItems}/>
        {/* <Container className='main'>
          <DocProfile />
        </Container> */}
      </Fragment>
    );
  }
}
export default App;

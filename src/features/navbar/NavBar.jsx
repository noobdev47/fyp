import React, { Component } from "react";
import { Menu, Dropdown, Button, Image } from "semantic-ui-react";

const trigger = (
  <Menu.Item>
    <Image size='mini' avatar src={"https://randomuser.me/api/portraits/men/84.jpg"} />
  </Menu.Item>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "patient" };
  }

  render() {
    const role = this.state.role;
    let buttons;

    if (role === "patient") {
      buttons = (
        <Menu.Item>
          <Menu.Item name="Appointments" />
          <Menu.Item name="Prescriptions" />
        </Menu.Item>
      );
    }
    return (
      <Menu className="navbar" borderless size='mini' inverted fixed="top">
        <Menu.Item header>
          <img src="" alt="logo" />
        </Menu.Item>
        {buttons}
        <Menu.Menu position="right">
          <Dropdown
            trigger={trigger}
            options={options}
            pointing="top left"
            icon={null}
          />

          <Menu.Item>
            <Button as='a' primary content="Logout" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;

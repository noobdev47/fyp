import React, { Component } from "react";
import _ from "lodash";
import {
  Menu,
  Dropdown,
  Button,
  Image,
  SidebarPushable,
  Sidebar,
  SidebarPusher,
  Icon,
  Container,
  Responsive
} from "semantic-ui-react";

const MobileNavBar = ({
  children,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <SidebarPushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      items={rightItems}
      vertical
      direction="top"
      width="thin"
      visible={visible}
    >
      <Menu.Item>HEALTH-E</Menu.Item>
      <Menu.Item as="a">
        <Icon name="doctor" />
        Find Doctors
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="hospital" />
        Find Hospitals
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="sign-in" />
        Login
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="signup" />
        Signup
      </Menu.Item>
    </Sidebar>
    <SidebarPusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" className="navbar" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item className="head" header content="HEALTH-E" />
      </Menu>
      {children}
    </SidebarPusher>
  </SidebarPushable>
);

const NavBarDesktop = ({ rightItems }) => (
  <Menu fixed="top" className="navbar" borderless mini inverted>
    <Menu.Item className="head" header content="HEALTH-E" />

    <Menu.Menu className="right" position="right">
      {_.map(rightItems, item => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

const trigger = (
  <Menu.Item>
    <Image
      size="mini"
      avatar
      src={"https://randomuser.me/api/portraits/men/84.jpg"}
    />
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
    this.state = { role: null };
  }

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handlePusher = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, rightItems } = this.props;
    const { visible } = this.state;
    const role = this.state.role;
    let buttons;
    let rightMenu;

    if (role === "patient") {
      buttons = (
        <Menu.Item>
          <Menu.Item name="Appointments" />
          <Menu.Item name="Prescriptions" />
        </Menu.Item>
      );

      rightMenu = (
        <Menu.Menu position="right">
          <Dropdown
            trigger={trigger}
            options={options}
            pointing="top left"
            icon={null}
          />

          <Menu.Item>
            <Button as="a" primary content="Logout" />
          </Menu.Item>
        </Menu.Menu>
      );
    } else if (role === null) {
      rightMenu = (
        <Menu.Menu className="right" position="right">
          <Menu.Item>
            <Button as="a" primary content="Find Doctors" />
          </Menu.Item>
          <Menu.Item>
            <Button as="a" primary content="Find Hospitals" />
          </Menu.Item>
          <Menu.Item>
            <Button as="a" primary content="Login" />
          </Menu.Item>
          <Menu.Item>
            <Button as="a" primary content="Signup" />
          </Menu.Item>
        </Menu.Menu>
      );
    }
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <MobileNavBar
            rightItems={rightItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </MobileNavBar>
        </Responsive>

        {/* <Menu className="navbar" borderless size="mini" inverted fixed="top"> */}
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
        {/* </Menu> */}
      </div>
    );
  }
}

export default NavBar;

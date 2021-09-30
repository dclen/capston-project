import React from "react";
import "./NavBar.css";
import { Menu, Input } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu secondary>
      <img
        src="https://cplfoundation.org/wp-content/uploads/2019/08/Allstate_Logo.png"
        height="60"
        alt="allstate"
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;

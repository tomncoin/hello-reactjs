

import { Navbar, Nav, Collapse, NavItem, NavLink, NavbarBrand, NavbarToggler
,DropdownMenu, DropdownItem, NavbarText,UncontrolledDropdown, DropdownToggle} from 'reactstrap';

function TopMenu(){
    return (
        <div>
             <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/products/">
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users">
            Users
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
        </div>
    );
}

export default TopMenu;
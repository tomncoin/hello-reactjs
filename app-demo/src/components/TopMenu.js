

import { Navbar, Nav, Collapse, NavItem, NavLink, NavbarBrand, NavbarToggler
,DropdownMenu, DropdownItem, NavbarText,UncontrolledDropdown, DropdownToggle} from 'reactstrap';
import {CartContext} from '../contexts/Cart';

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

        <CartContext.Consumer>
          {
            ({cartItems})=>(
              <NavLink href="/products">
                Cart ({cartItems.length})
              </NavLink>
            )
          }
        </CartContext.Consumer>
      </NavbarText>
    </Collapse>
  </Navbar>
        </div>
    );
}

export default TopMenu;
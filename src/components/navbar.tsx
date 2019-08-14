import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
   
    render() {
        return(
            <div>
                <Navbar color="light" light expand="xs">
                <NavbarBrand tag={Link} to="/home">AppName</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/top-donations">Top donators</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/blog">Blog</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav >
                            <img src="https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png" style={{height:"30px",width:"30px"}} />
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            <NavLink tag={Link} to="/profile" style={{textDecoration:"none", color:"black", fontSize:"16px"}}>Profile</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
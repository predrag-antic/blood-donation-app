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
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
   
    render() {
        return(
            <div>
                <Navbar color="light" light expand="xs" fixed="top">
                <NavbarBrand tag={Link} to="/home"><b>B</b>loo<b>D</b>onor</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/blog">Blog</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar> }
                        { <DropdownToggle nav > */}
                        <NavLink tag={Link} to="/profile" style={{textDecoration:"none", color:"black", fontSize:"16px"}}><img src="https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png" style={{height:"30px",width:"30px"}} /></NavLink>
                        {/* </DropdownToggle>
                        { {<DropdownMenu right> }
                            {<NavLink tag={Link} to="/profile" style={{textDecoration:"none", color:"black", fontSize:"16px"}}>Profile</NavLink> }
                         
                        { </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
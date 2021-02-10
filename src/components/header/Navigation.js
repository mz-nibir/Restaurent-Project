

import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inNavOpen: false

        }

    }
    navToggle = () => {
        this.setState({
            inNavOpen: !this.state.inNavOpen
        })
    }

    render() {

        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">Bohubrihi Restaurant</NavbarBrand>
                        <Collapse isOpen={this.state.inNavOpen} navbar>

                            <Nav className="mr-auto" navbar>

                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/menu" className="nav-link">Menu</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/about" className="nav-link">About</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </NavItem>



                            </Nav>

                        </Collapse>

                    </div>


                </Navbar>

            </div>
        )


    }

}

export default Navigation;
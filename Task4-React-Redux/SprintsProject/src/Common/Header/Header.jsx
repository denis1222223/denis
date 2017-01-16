import React, { PropTypes, Component} from 'react';
import { Link } from 'react-router';

import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth } = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Sprints Manager</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} onClick={() => auth.login()}>Login</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
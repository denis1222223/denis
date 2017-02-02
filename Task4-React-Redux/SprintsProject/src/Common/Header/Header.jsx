import React, { PropTypes, Component} from 'react';
import { Link, browserHistory } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth } = this.props;
        var name = "";
        var logout = "";
        var admin = "";
        if (auth) {
            if (auth.loggedIn()) {
                var profile = auth.getProfile();
                name = <NavItem>{profile.name}</NavItem>;
                logout = <NavItem onClick={() => auth.logout()}>Logout</NavItem>;

                if (auth.isAdmin()) {
                    admin = <Nav><NavItem onClick={() => browserHistory.push("/admin")}>Admin</NavItem></Nav>;
                }
            }
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Sprints Manager</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                {admin}
                <Nav pullRight>
                    {logout}
                    {name}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
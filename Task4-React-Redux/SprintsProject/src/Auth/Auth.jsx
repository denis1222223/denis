import React, { Component } from 'react'
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import './auth.less';

export class Auth extends Component {
    render() {
        const { auth } = this.props;
        var greeting = "";
        var login = "";
        if (auth) {
            if (auth.loggedIn()) {
                var profile = auth.getProfile();
                greeting = <NavItem>{profile.name}</NavItem>;
                login = <NavItem onClick={() => auth.logout()}>Logout</NavItem>;
            } else {
                login = <NavItem onClick={() => auth.login()}>Login</NavItem>;
            }
        }

        return (
            <Nav pullRight>
                {login}
                {greeting}
            </Nav>
        )
    }
}

export default Auth;
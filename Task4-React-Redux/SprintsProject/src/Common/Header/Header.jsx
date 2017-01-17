import React, { PropTypes, Component} from 'react';
import Login from '../../Login'
import { Link } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';

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
                <Login auth={auth}/>
            </Navbar>
        );
    }
}

export default Header;
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SideBar from 'components/SideBar';

import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import Button  from 'react-bootstrap/lib/Button';

import './app.less';
import './bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sprintId = this.props.location.query.id;
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <SideBar sprintId={sprintId} sprints={this.props.sprints} />
                        </Col>
                        <Col xs={9} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};

function mapStateToProps (state) {
    return {
        sprints: state.sprints
    }
}

export default connect(mapStateToProps)(App)

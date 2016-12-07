import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SprintModal from 'components/Modals/SprintModal';
import TaskModal from 'components/Modals/TaskModal';
import SideBar from 'components/SideBar';

import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';

import 'bootstrap-less/bootstrap/index.less';
import './app.less';

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
                            <SideBar sprintId={sprintId} />
                        </Col>
                        <Col xs={9} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
                <SprintModal />
                <TaskModal />
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

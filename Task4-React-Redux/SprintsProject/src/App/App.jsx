import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SprintList from '../Sprint/SprintList';
import Modal from '../Common/Modal';
import {getAllSprints} from "../Sprint/sprintsActions";
import {getAllTasks} from "../Task/tasksActions";
import {getAllSubtasks} from "../Task/Subtask/subtasksActions";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import 'bootstrap-less/bootstrap/index.less';
import './app.less';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllSprints();
     //   this.props.getAllTasks();
     //   this.props.getAllSubtasks();
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <SprintList />
                        </Col>
                        <Col xs={9} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
                <Modal />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSprints: function() {
            dispatch(getAllSprints())
        },
        getAllTasks: function() {
            dispatch(getAllTasks())
        },
        getAllSubtasks: function() {
            dispatch(getAllSubtasks())
        }
    }
};

export default connect(null, mapDispatchToProps)(App);

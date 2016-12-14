import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {addTask} from "../Task/tasksActions";
import {showModal} from "../Common/Modal/modalActions";
import TaskShortcut from '../Task/TaskShortcut';
import TaskForm from '../Task/TaskForm'
import {Map} from 'immutable';

import Panel  from 'react-bootstrap/lib/Panel';
import Table  from 'react-bootstrap/lib/Table';
import Button  from 'react-bootstrap/lib/Button';

import './sprint.less';

class Sprint extends Component {
    constructor(props) {
        super(props);
    }

    generateTaskList(tasks) {
        return tasks.map((task) => {
            return (
                <TaskShortcut key={task.get('id')} task={task}/>
            );
        });
    }

    render() {
        var sprintId = this.props.location.query.id;
        if (sprintId == "none") {
            return (<div></div>);
        }
        var tasks = this.props.tasks;

        var filterByStatus = function(status) {
            return tasks.filter((task) => {
                return (task.get('status') == status) && (task.get('sprintId') == sprintId);
            });
        };

        var openTasks = filterByStatus("open");
        var progressTasks = filterByStatus("in-progress");
        var closedTasks = filterByStatus("closed");

        var openTasksList = this.generateTaskList(openTasks);
        var progressTasksList = this.generateTaskList(progressTasks);
        var closedTasksList = this.generateTaskList(closedTasks);
        
        var sprints = this.props.sprints;
        var sprintInfo = sprints.find((sprint) => {
            return sprint.get('id') == sprintId;
        });
        var sprintTitle = (
            <div>
                {sprintInfo.get('name')}
                <br/>
                {sprintInfo.get('beginningDate')} - {sprintInfo.get('expirationDate')}
            </div>
        );

        return (
            <div className='sprint'>
                <Panel header={sprintTitle} bsStyle="primary">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th className="open">Open</th>
                            <th className="progress">In progress</th>
                            <th className="closed">Closed</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="open">{openTasksList}</td>
                            <td className="progress">{progressTasksList}</td>
                            <td className="closed">{closedTasksList}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Button bsStyle="success" onClick={() => {
                        this.props.showModal("Add task", <TaskForm item={new Map({sprintId})} action={addTask} />);
                    }}> + </Button>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: function(title, body) {
            dispatch(showModal(title, body))
        }
    }
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)
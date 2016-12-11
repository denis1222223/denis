import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {addTask} from "../Task/tasksActions";
import {showModal} from "../Modal/modalActions";
import {fillForm} from "../Forms/formActions";
import TaskShortcut from '../TaskShortcut';

import Panel  from 'react-bootstrap/lib/Panel';
import Table  from 'react-bootstrap/lib/Table';
import Button  from 'react-bootstrap/lib/Button';

import './sprint.less';

class Sprint extends Component {
    constructor(props) {
        super(props);
    }

    generateTaskList(tasks) {
        return tasks.map((item) => {
            return (
                <TaskShortcut key={item.id} task={item}/>
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
            return tasks.filter((item)=>{
                return (item.status == status) && (item.sprintId == sprintId);
            });
        };

        var openTasks = filterByStatus("open");
        var progressTasks = filterByStatus("in-progress");
        var closedTasks = filterByStatus("closed");

        var openTasksList = this.generateTaskList(openTasks);
        var progressTasksList = this.generateTaskList(progressTasks);
        var closedTasksList = this.generateTaskList(closedTasks);
        
        var sprints = this.props.sprints;
        var sprintInfo = sprints.find((item)=>{
            return item.id == sprintId;
        });
        var sprintTitle = (
            <div>
                {sprintInfo.name}
                <br/>
                {sprintInfo.beginningDate} - {sprintInfo.expirationDate}
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
                        this.props.fillForm(addTask, {sprintId});
                        this.props.showModal("Add task", "TaskForm");
                    }}> + </Button>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fillForm: function(action, item) {
            dispatch(fillForm(action, item))
        },
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
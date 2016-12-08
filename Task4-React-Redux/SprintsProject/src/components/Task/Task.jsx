import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

import Subtask from 'components/Subtask';
import { deleteTask, addSubtask } from '../../redux/actions/tasksActions';
import { showEditTaskModal } from '../../redux/actions/modalsActions';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import InputGroup  from 'react-bootstrap/lib/InputGroup';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './task.less';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    onSubtaskAddClick(taskId) {
        var newSubtask = ReactDOM.findDOMNode(this.refs.newSubtask).value;
        this.props.addSubtask(newSubtask, taskId);
        ReactDOM.findDOMNode(this.refs.newSubtask).value = "";
    }

    render() {
        var taskId = this.props.location.query.id;
        var tasks = this.props.tasks;
        var task = tasks.find((item)=>{
            return item.id == taskId;
        });

        var subtasksList = task.subtasks.map((item)=>{
           return (
               <Subtask key={item.id} taskId={task.id} subtask={item} />
           );
        });

        var sprint = this.props.sprints.find((item)=>{
            return item.id == task.sprintId;
        });
        
        var header = (
            <div className="task__header">
                {task.name} | Category: {task.category} | Sprint: {sprint.name}

                <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                        onClick={() => {this.props.showEditTaskModal(task)}}>
                    <Glyphicon glyph="glyphicon glyphicon-edit" />
                </Button>
                <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                        onClick={() => {
                            this.props.deleteTask(task.id);
                            browserHistory.push("/sprint?id=" + task.sprintId);
                        }}>
                    <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button>
            </div>
        );

        return (
            <div className='task'>
                <Panel header={header} className={task.status}>
                    {subtasksList}

                    <InputGroup>
                        <InputGroup.Button>
                            <Button bsStyle="success" onClick={this.onSubtaskAddClick.bind(this, taskId)}> + </Button>
                        </InputGroup.Button>
                        <FormControl type="text" placeholder="New subtask" ref="newSubtask"  />
                    </InputGroup>

                </Panel>
            </div>
        );
    }
}

Task.propTypes = {};
Task.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: function(id) {
            dispatch(deleteTask(id));
        },
        addSubtask: function(newSubtask, taskId) {
            dispatch(addSubtask(newSubtask, taskId));
        },
        showEditTaskModal: function(task) {
            dispatch(showEditTaskModal(task))
        }
    }
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
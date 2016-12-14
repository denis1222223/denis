import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Subtask from '../Task/Subtask';
import TaskForm from '../Task/TaskForm';
import { deleteTask, editTask } from '../Task/tasksActions';
import { addSubtask } from './Subtask/subtasksActions';
import { showModal } from '../Common/Modal/modalActions';

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
        this.props.addSubtask({
            name: ReactDOM.findDOMNode(this.refs.newSubtask).value, 
            taskId
        });
        ReactDOM.findDOMNode(this.refs.newSubtask).value = "";
    }

    render() {
        var taskId = this.props.location.query.id;
        var task = this.props.tasks.find((task) => {
            return task.get('id') == taskId;
        });

        var subtasksList = this.props.subtasks.filter((subtask) => {
            return subtask.get('taskId') == taskId;
        }).map((subtask)=>{
           return (
               <Subtask key={subtask.get('id')} subtask={subtask} />
           );
        });

        var sprint = this.props.sprints.find((sprint) => {
            return sprint.get('id') == task.get('sprintId');
        });
        
        var header = (
            <div>
                {task.get('name')} | Category: {task.get('category')} | Sprint: {sprint.get('name')}

                <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                        onClick={() => {
                            this.props.showModal("Edit task", <TaskForm item={task} action={editTask} />);
                        }}>
                    <Glyphicon glyph="glyphicon glyphicon-edit" />
                </Button>
                <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                        onClick={() => {
                            this.props.deleteTask(task.get('id'));
                            browserHistory.push("/sprint?id=" + task.get('sprintId'));
                        }}>
                    <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button>
            </div>
        );

        return (
            <div className='task'>
                <Panel header={header} className={task.get('status')}>
                    {subtasksList}

                    <InputGroup>
                        <InputGroup.Button>
                            <Button bsStyle="success" onClick={() => {this.onSubtaskAddClick(taskId)}}> + </Button>
                        </InputGroup.Button>
                        <FormControl type="text" placeholder="New subtask" ref="newSubtask"  />
                    </InputGroup>

                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSubtask: function(subtask) {
            dispatch(addSubtask(subtask));
        },
        deleteTask: function(id) {
            dispatch(deleteTask(id));
        },
        showModal: function(title, body) {
            dispatch(showModal(title, body))
        }
    }
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks,
        sprints: state.sprints,
        subtasks: state.subtasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
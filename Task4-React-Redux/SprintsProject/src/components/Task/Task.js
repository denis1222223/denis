import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import ReactDOM from 'react-dom';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import InputGroup  from 'react-bootstrap/lib/InputGroup';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Subtask from 'components/Subtask';
import { deleteTask, addSubtask } from '../../redux/actions/tasksActions';
import { showEditTaskModal } from '../../redux/actions/modalsActions';

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

    onEditTaskClick(id) {
        var task = this.props.tasks.find((item)=>{
            return item.id == id;
        });
        this.props.showEditTaskModal({
            id: id,
            name: task.name,
            category: task.category,
            status: task.status,
            sprintId: task.sprintId,
            subtasks: task.subtasks
        });
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
            <div className="taskHeader">
                {task.name} | Category: {task.category} | Sprint: {sprint.name}

                <Button className="smallButton editButton" bsSize="xsmall" bsStyle="warning"
                        onClick={this.onEditTaskClick.bind(this, task.id)}>
                    <Glyphicon glyph="glyphicon glyphicon-edit" />
                </Button>
                <Link to={"/sprint?id=" + task.sprintId}>
                    <Button className="smallButton deleteButton" bsSize="xsmall" bsStyle="danger"
                            onClick={this.props.deleteTask.bind(null, task.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
                </Link>
            </div>
        );

        
        return (
            <div className='Task'>
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
        showEditTaskModal: function(taskAttributes) {
            dispatch(showEditTaskModal(taskAttributes))
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
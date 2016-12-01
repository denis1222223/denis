import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import { deleteTask } from '../../redux/actions/tasksActions';
import { showEditTaskModal } from '../../redux/actions/modalsActions';

import './taskShortcut.less';
import '../SideBar/sideBar.less';

class TaskShortcut extends Component {
    constructor(props) {
        super(props);
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
            sprintId: task.sprintId
        });
    }

    deleteTask(id) {
        this.props.deleteTask(id);
    }

    render() {
        var task = this.props.task;
        return (
            <div className='TaskShortcut'>
                <Panel>
                    <Link to={"/tasks?id=" + task.id}>
                        {task.name}
                    </Link>
                    <Button className="smallButton editTaskButton" bsSize="xsmall" bsStyle="warning" 
                            onClick={this.onEditTaskClick.bind(this, task.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="smallButton deleteTaskButton" bsSize="xsmall" bsStyle="danger" 
                            onClick={this.deleteTask.bind(this, task.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
                </Panel>
            </div>
        )
    }
}

TaskShortcut.propTypes = {};
TaskShortcut.defaultProps = {};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: function(id) {
            dispatch(deleteTask(id));
        },
        showEditTaskModal: function(taskAttributes) {
            dispatch(showEditTaskModal(taskAttributes))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskShortcut)
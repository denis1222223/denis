import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { deleteTask } from '../Task/tasksActions';
import { showEditTaskModal } from '../Modals/modalsActions';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './task-shortcut.less';

class TaskShortcut extends Component {
    constructor(props) {
        super(props);
    }

    onEditTaskClick(id) {
        var task = this.props.tasks.find((item)=>{
            return item.id == id;
        });
        this.props.showEditTaskModal(task);
    }
    
    render() {
        var task = this.props.task;
        return (
            <div className='task-shortcut'>

                <Panel>
                    <Link to={"/task?id=" + task.id}>
                        {task.name}
                    </Link>

                    <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                            onClick={this.onEditTaskClick.bind(this, task.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                            onClick={this.props.deleteTask.bind(this, task.id)}>
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
        showEditTaskModal: function(task) {
            dispatch(showEditTaskModal(task))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskShortcut)
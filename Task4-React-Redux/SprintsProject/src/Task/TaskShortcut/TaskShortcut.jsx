import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import TaskForm from '../TaskForm';
import { deleteTask, editTask } from '../tasksActions';
import { showModal } from '../../Common/Modal/modalActions';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './task-shortcut.less';

class TaskShortcut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var task = this.props.task;
        return (
            <div className='task-shortcut'>

                <Panel>
                    <Link to={"/task/".concat(task.get('id'))}>
                        {task.get('name')}
                    </Link>

                    <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                            onClick={() => {
                                this.props.showModal("Edit task", <TaskForm item={task} action={editTask} />);
                            }}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                            onClick={() => {this.props.deleteTask(task.get('id'));}}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
                </Panel>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: function(id) {
            dispatch(deleteTask(id));
        },
        showModal: function(title, body) {
            dispatch(showModal(title, body))
        }
    }
};

export default connect(null, mapDispatchToProps)(TaskShortcut)
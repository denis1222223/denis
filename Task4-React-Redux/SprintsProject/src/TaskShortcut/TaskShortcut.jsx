import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { deleteTask, editTask } from '../Task/tasksActions';
import { showModal } from '../Modal/modalActions';
import { fillForm } from "../Forms/formActions";

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
                    <Link to={"/task?id=".concat(task.get('id'))}>
                        {task.get('name')}
                    </Link>

                    <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                            onClick={() => {
                                this.props.fillForm(editTask, task);
                                this.props.showModal("Edit task", "TaskForm");
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
        fillForm: function(action, item) {
            dispatch(fillForm(action, item))
        },
        deleteTask: function(id) {
            dispatch(deleteTask(id));
        },
        showModal: function(title, body) {
            dispatch(showModal(title, body))
        }
    }
};

export default connect(null, mapDispatchToProps)(TaskShortcut)
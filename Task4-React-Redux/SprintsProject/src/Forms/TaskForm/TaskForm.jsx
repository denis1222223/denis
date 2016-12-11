import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { hideModal } from '../../Modal/modalActions';

import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';

import '../forms.less';

class TaskForm extends Component {
    constructor(props) {
        super(props);
    }

    collectForm() {
        return {
            name: ReactDOM.findDOMNode(this.refs.taskName).value,
            category: ReactDOM.findDOMNode(this.refs.taskCategory).value,
            status: ReactDOM.findDOMNode(this.refs.taskStatus).value,
            sprintId: ReactDOM.findDOMNode(this.refs.tasks_sprintName).value
        }
    }

    validation() {
        var form = this.collectForm();
        if ((form.name == "") || (form.category == "") || (form.status == "") || (form.sprintId == "")) {
            return false;
        }
        return true;
    }

    acceptForm(action) {
        if (this.validation()) {
            this.props.accept({
                ...this.collectForm(),
                id: this.props.form.item.id ? this.props.form.item.id : "",
                subtasks: this.props.form.item.subtasks ? this.props.form.item.subtasks : []
            }, action);
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var item = this.props.form.item;
        return(
            <FormGroup>
                <ControlLabel>Task name</ControlLabel>
                <FormControl type="text" placeholder="Task name" ref="taskName" defaultValue={item.name ? item.name : ""} />

                <ControlLabel>Task category</ControlLabel>
                <FormControl type="text" placeholder="Task category" ref="taskCategory" defaultValue={item.category ? item.category : ""} />

                <ControlLabel>Task status</ControlLabel>
                <FormControl componentClass="select" ref="taskStatus" defaultValue={item.status ? item.status : ""}>
                    <option value="open">Open</option>
                    <option value="in-progress">In progress</option>
                    <option value="closed">Closed</option>
                </FormControl>

                <ControlLabel>Sprint name</ControlLabel>
                <FormControl componentClass="select" ref="tasks_sprintName" defaultValue={item.sprintId ? item.sprintId : ""}>
                    {this.props.sprints.map((sprint) => {
                        return <option key={sprint.id} value={sprint.id}>{sprint.name}</option>
                    })}
                </FormControl>
                <Button bsStyle="success" onClick={() => {this.acceptForm(this.props.form.action)}}> OK </Button>
            </FormGroup>
        );
    }
}

function mapStateToProps (state) {
    return {
        form: state.form,
        sprints: state.sprints
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        accept: function(taskInfo, action) {
            dispatch(action(taskInfo));
            dispatch(hideModal());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
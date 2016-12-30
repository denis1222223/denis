import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { hideModal } from '../../Common/Modal/modalActions';

import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';

import '../../Common/forms.less';

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
                id: this.props.item.has('id') ? this.props.item.get('id') : ""
            }, action);
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var item = this.props.item;
        return(
            <FormGroup>
                <ControlLabel>Task name</ControlLabel>
                <FormControl type="text" placeholder="Task name" ref="taskName" defaultValue={item.has('name') ? item.get('name') : ""} />

                <ControlLabel>Task category</ControlLabel>
                <FormControl type="text" placeholder="Task category" ref="taskCategory" defaultValue={item.has('category') ? item.get('category') : ""} />

                <ControlLabel>Task status</ControlLabel>
                <FormControl componentClass="select" ref="taskStatus" defaultValue={item.has('status') ? item.get('status') : ""}>
                    <option value="0">Open</option>
                    <option value="1">In progress</option>
                    <option value="2">Closed</option>
                </FormControl>

                <ControlLabel>Sprint name</ControlLabel>
                <FormControl componentClass="select" ref="tasks_sprintName" defaultValue={item.has('sprintId') ? item.get('sprintId') : ""}>
                    {this.props.sprints.map((sprint) => {
                        return <option key={sprint.get('id')} value={sprint.get('id')}>{sprint.get('name')}</option>
                    })}
                </FormControl>
                <Button bsStyle="success" onClick={() => {this.acceptForm(this.props.action)}}> OK </Button>
            </FormGroup>
        );
    }
}

function mapStateToProps (state) {
    return {
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
import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Modal  from 'react-bootstrap/lib/Modal';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import { hideTaskModal } from '../../../redux/actions/modalsActions';

class TaskModal extends Component {
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

    acceptModal(action) {
        if (this.validation()) {
            this.props.acceptModal({
                ...this.collectForm(),
                id: this.props.modal.id,
                subtasks: this.props.modal.subtasks
            }, action);
            this.props.hideTaskModal();
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var hideModal = this.props.hideTaskModal;

        return(
            <Modal show={this.props.modal.show} onHide={hideModal} bsSize="small">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Task name</ControlLabel>
                        <FormControl type="text" placeholder="Task name" ref="taskName" defaultValue={this.props.modal.name} />

                        <ControlLabel>Task category</ControlLabel>
                        <FormControl type="text" placeholder="Task category" ref="taskCategory" defaultValue={this.props.modal.category} />

                        <ControlLabel>Task status</ControlLabel>
                        <FormControl componentClass="select" ref="taskStatus" defaultValue={this.props.modal.statusDefault}>
                            <option value="open">Open</option>
                            <option value="in-progress">In progress</option>
                            <option value="closed">Closed</option>
                        </FormControl>

                        <ControlLabel>Sprint name</ControlLabel>
                        <FormControl componentClass="select" ref="tasks_sprintName" defaultValue={this.props.modal.sprintDefault}>
                            {this.props.sprints.map((item) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideModal}>Cancel</Button>
                    <Button bsStyle="success" onClick={this.acceptModal.bind(this, this.props.modal.action)}> OK </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

TaskModal.propTypes = {};
TaskModal.defaultProps = {};

function mapStateToProps (state) {
    return {
        modal: state.modals.taskModal,
        tasks: state.tasks,
        sprints: state.sprints
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideTaskModal: function() {
            dispatch(hideTaskModal());
        },
        acceptModal: function(taskInfo, action) {
            dispatch(action(taskInfo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal)
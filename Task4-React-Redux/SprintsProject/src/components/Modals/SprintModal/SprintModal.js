import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import Modal  from 'react-bootstrap/lib/Modal';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import { hideSprintModal } from '../../../redux/actions/modalsActions';

class SprintModal extends Component {
    constructor(props) {
        super(props);
    }

    collectForm() {
        return {
            name: ReactDOM.findDOMNode(this.refs.sprintName).value,
            beginningDate: document.getElementById("addSprintBeginningDate").getAttribute('data-formattedvalue'),
            expirationDate: document.getElementById("addSprintExpirationDate").getAttribute('data-formattedvalue')
        }
    }

    validation() {
        var form = this.collectForm();
        if ((form.name == "") || (form.beginningDate == "") || (form.expirationDate == "")) {
            return false;
        }
        return true;
    }

    acceptModal(action) {
        if (this.validation()) {
            this.props.acceptModal({...this.collectForm(), id: this.props.modal.id}, action);
            this.props.hideSprintModal();
        } else {
            alert("Fill all fields, please.");
        }
    }

    getDate(dateString) {
        if (!dateString) {
            return new Date().toISOString();
        }
        var dateAttrs = dateString.split("/");
        var date = new Date();
        date.setMonth(Number(dateAttrs[0]-1));
        date.setDate(Number(dateAttrs[1]));
        date.setYear(Number(dateAttrs[2]));
        return date.toISOString();
    }

    render() {
        var hideModal = this.props.hideSprintModal;
        var beginningDate = this.getDate(this.props.modal.beginningDate);
        var expirationDate = this.getDate(this.props.modal.expirationDate);
        return(
            <Modal show={this.props.modal.show} onHide={hideModal} bsSize="small">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Sprint name</ControlLabel>
                        <FormControl type="text" placeholder="Sprint name" ref="sprintName" defaultValue={this.props.modal.name} />
                        <ControlLabel>Date of beginning</ControlLabel>
                        <DatePicker id="addSprintBeginningDate" weekStartsOnMonday placeholder="Beginning date" defaultValue={beginningDate}/>
                        <ControlLabel>Expiration date</ControlLabel>
                        <DatePicker id="addSprintExpirationDate" weekStartsOnMonday placeholder="Expiration date" defaultValue={expirationDate}/>
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

SprintModal.propTypes = {};
SprintModal.defaultProps = {};

function mapStateToProps (state) {
    return {
        modal: state.modals.sprintModal,
        sprints: state.sprints
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSprintModal: function() {
            dispatch(hideSprintModal());
        },
        acceptModal: function(sprintInfo, action) {
            dispatch(action(sprintInfo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintModal)
import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { hideSprintModal } from '../modalsActions';

import DatePicker from 'react-bootstrap-date-picker';
import Modal  from 'react-bootstrap/lib/Modal';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';

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
        return ((form.name != "") && (form.beginningDate != "") && (form.expirationDate != ""));
    }

    acceptModal(action) {
        if (this.validation()) {
            this.props.acceptModal({...this.collectForm(), id: this.props.modal.id}, action);
            this.props.hideSprintModal();
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var hideModal = this.props.hideSprintModal;

        var beginningDateISO = new Date().toISOString(), expirationDateISO = beginningDateISO;
        if ((this.props.modal.beginningDate) && ((this.props.modal.expirationDate))) {
            var beginningDate = new Date(this.props.modal.beginningDate);
            var expirationDate = new Date(this.props.modal.expirationDate);
            var timeZoneOffset = beginningDate.getTimezoneOffset() * 60000;
            beginningDateISO = (new Date(beginningDate - timeZoneOffset)).toISOString().slice(0,-1);
            expirationDateISO = (new Date(expirationDate - timeZoneOffset)).toISOString().slice(0,-1);
        }

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
                        <DatePicker id="addSprintBeginningDate" weekStartsOnMonday placeholder="Beginning date" defaultValue={beginningDateISO}/>
                        <ControlLabel>Expiration date</ControlLabel>
                        <DatePicker id="addSprintExpirationDate" weekStartsOnMonday placeholder="Expiration date" defaultValue={expirationDateISO}/>
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
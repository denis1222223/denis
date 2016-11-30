import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import Modal  from 'react-bootstrap/lib/Modal';
import HelpBlock  from 'react-bootstrap/lib/HelpBlock';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import { hideAddSprint } from '../../../redux/actions/modalsActions';
import { addSprint } from '../../../redux/actions/sprintsActions';

class AddSprint extends Component {
    constructor(props) {
        super(props);
    }

    collectForm() {
        return {
            name: ReactDOM.findDOMNode(this.refs.sprintName).value,
            beginning: document.getElementById("addSprintBeginningDate").getAttribute('data-formattedvalue'),
            expiration: document.getElementById("addSprintExpirationDate").getAttribute('data-formattedvalue')
        }
    }

    validation() {
        var form = this.collectForm();
        if ((form.name == "") || (form.beginning == "") || (form.expiration == "")) {
            return false;
        }
        return true;
    }

    addSprint() {
        if (this.validation()) {
            this.props.addSprint(this.collectForm());
            this.props.hideAddSprint();
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var hideAddSprint = this.props.hideAddSprint;
        return(
            <Modal show={this.props.show} onHide={hideAddSprint}>
                <Modal.Header closeButton>
                    <Modal.Title>Add sprint</Modal.Title>
                    <hr/>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Sprint name</ControlLabel>
                        <FormControl type="text" placeholder="Sprint name" ref="sprintName"/>
                        <ControlLabel>Date of beginning</ControlLabel>
                        <DatePicker id="addSprintBeginningDate" weekStartsOnMonday placeholder="Beginning date" />
                        <ControlLabel>Expiration date</ControlLabel>
                        <DatePicker id="addSprintExpirationDate" weekStartsOnMonday placeholder="Expiration date" />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideAddSprint}>Cancel</Button>
                    <Button bsStyle="success" onClick={this.addSprint.bind(this)}> Add </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

AddSprint.propTypes = {};
AddSprint.defaultProps = {};

function mapStateToProps (state) {
    return {
        show: state.modals.addSprint.show
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAddSprint: function() {
            dispatch(hideAddSprint());
        },
        addSprint: function(sprintInfo) {
            dispatch(addSprint(sprintInfo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSprint)
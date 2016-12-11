import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { hideModal } from '../../Modal/modalActions';

import DatePicker from 'react-bootstrap-date-picker';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';

import '../forms.less';

class SprintForm extends Component {
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

    acceptForm(action) {
        if (this.validation()) {
            this.props.accept({
                ...this.collectForm(),
                id: this.props.form.item ? this.props.form.item.id : ""
            }, action);
        } else {
            alert("Fill all fields, please.");
        }
    }

    getDateISO(dateString) {
        if (dateString) {
            var date = new Date(dateString);
            var timeZoneOffset = date.getTimezoneOffset() * 60000;
            return (new Date(date - timeZoneOffset)).toISOString().slice(0,-1);
        }
        return new Date().toISOString();
    }

    render() {
        var item = this.props.form.item;
        var beginningDateISO = this.getDateISO(item ? item.beginningDate : "");
        var expirationDateISO = this.getDateISO(item ? item.expirationDate : "");

        return (
            <FormGroup>
                <ControlLabel>Sprint name</ControlLabel>
                <FormControl type="text" placeholder="Sprint name" ref="sprintName" defaultValue={item ? item.name : ""} />
                <ControlLabel>Date of beginning</ControlLabel>
                <DatePicker id="addSprintBeginningDate" weekStartsOnMonday placeholder="Beginning date" defaultValue={beginningDateISO}/>
                <ControlLabel>Expiration date</ControlLabel>
                <DatePicker id="addSprintExpirationDate" weekStartsOnMonday placeholder="Expiration date" defaultValue={expirationDateISO}/>
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
       accept: function(sprintInfo, action) {
           dispatch(action(sprintInfo));
           dispatch(hideModal());
       }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintForm)
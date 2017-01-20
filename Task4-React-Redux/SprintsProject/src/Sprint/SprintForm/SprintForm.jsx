import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { hideModal } from '../../Common/Modal/modalActions';

import DatePicker from 'react-bootstrap-date-picker';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormGroup  from 'react-bootstrap/lib/FormGroup';

import '../../Common/forms.less';

class SprintForm extends Component {
    constructor(props) {
        super(props);
    }

    collectForm() {
        return {
            name: ReactDOM.findDOMNode(this.refs.sprintName).value,
            startDate: document.getElementById("addSprintStartDate").getAttribute('data-formattedvalue'),
            endDate: document.getElementById("addSprintEndDate").getAttribute('data-formattedvalue')
        }
    }

    validation() {
        var form = this.collectForm();
        return ((form.name != "") && (form.startDate != "") && (form.endDate != ""));
    }

    acceptForm(auth, action) {
        if (this.validation()) {
            this.props.accept(auth, {
                ...this.collectForm(),
                id: this.props.item ? this.props.item.get('id') : ""
            }, action);
        } else {
            alert("Fill all fields, please.");
        }
    }

    render() {
        var item = this.props.item;
        var startDateISO = item ? moment(item.get('startDate')).format() : moment().format();
        var endDateISO = item ? moment(item.get('endDate')).format() : moment().format();

        var auth = this.props.auth;
        
        return (
            <FormGroup>
                <ControlLabel>Sprint name</ControlLabel>
                <FormControl type="text" placeholder="Sprint name" ref="sprintName" defaultValue={item ? item.get('name') : ""} />
                <ControlLabel>Date of beginning</ControlLabel>
                <DatePicker id="addSprintStartDate" weekStartsOnMonday placeholder="Start date" defaultValue={startDateISO}/>
                <ControlLabel>Expiration date</ControlLabel>
                <DatePicker id="addSprintEndDate" weekStartsOnMonday placeholder="End date" defaultValue={endDateISO}/>
                <Button bsStyle="success" onClick={() => {this.acceptForm(auth, this.props.action)}}> OK </Button>
            </FormGroup>
        );
    }
}

function mapStateToProps (state) {
    return {
       item: state.form.get('item'),
       action: state.form.get('action')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       accept: function(auth, sprintInfo, action) {
           dispatch(action(auth, sprintInfo));
           dispatch(hideModal());
       }
    }
};

export default connect(null, mapDispatchToProps)(SprintForm)
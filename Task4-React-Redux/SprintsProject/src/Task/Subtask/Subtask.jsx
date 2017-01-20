import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';

import { deleteSubtask } from './subtasksActions';

import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './subtask.less';

class Subtask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var auth = this.props.auth;
        var deleteButton = "";
        if (auth && auth.isAdmin()) {
            deleteButton = <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                                   onClick={() => {this.props.deleteSubtask(this.props.subtask.get('id'))}}>
                <Glyphicon glyph="glyphicon glyphicon-trash" />
            </Button>;
        }

        return (
            <div className='subtask'>
                <Panel>
                    {this.props.subtask.get('name')}
                    {deleteButton}
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSubtask: function(id) {
            dispatch(deleteSubtask(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Subtask)
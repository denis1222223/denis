import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import {connect} from 'react-redux';

import './editButton.less';

class EditButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='EditButton'>
                <Button className="smallButton editTaskButton" bsSize="xsmall" bsStyle="warning"
                        onClick={this.onEditTaskClick.bind(this, task.id)}>
                    <Glyphicon glyph="glyphicon glyphicon-edit" />
                </Button>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteSubtask: function(taskId, id) {
            dispatch(deleteSubtask(taskId, id));
        }
    }
};

EditButton.propTypes = {};
EditButton.defaultProps = {};

export default connect(null, mapDispatchToProps)(EditButton)
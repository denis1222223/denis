import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import {connect} from 'react-redux';
import { deleteSubtask } from '../../redux/actions/tasksActions';

import './subtask.less';

class Subtask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Subtask'>
                <Panel>
                    {this.props.subtask.name}
                    <Button className="smallButton deleteButton" bsSize="xsmall" bsStyle="danger"
                            onClick={this.props.deleteSubtask.bind(this, this.props.taskId, this.props.subtask.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
                </Panel>
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

Subtask.propTypes = {};
Subtask.defaultProps = {};

export default connect(null, mapDispatchToProps)(Subtask)
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Panel  from 'react-bootstrap/lib/Panel';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './taskShortcut.less';

class TaskShortcut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var task = this.props.task;
        return (
            <div className='TaskShortcut'>

                    <Link to={"/tasks?id=" + task.id}>
                        <Panel>
                            {task.name}
                            <Button className="editTaskButton" bsSize="xsmall" bsStyle="warning">
                                <Glyphicon glyph="glyphicon glyphicon-edit" />
                            </Button>
                            <Button className="deleteTaskButton" bsSize="xsmall" bsStyle="danger">
                                <Glyphicon glyph="glyphicon glyphicon-trash" />
                            </Button>
                        </Panel>
                    </Link>

            </div>
        )
    }
}

TaskShortcut.propTypes = {};
TaskShortcut.defaultProps = {};

export default TaskShortcut;
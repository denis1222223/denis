import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Panel  from 'react-bootstrap/lib/Panel';

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
                        </Panel>
                    </Link>

            </div>
        )
    }
}

TaskShortcut.propTypes = {};
TaskShortcut.defaultProps = {};

export default TaskShortcut;
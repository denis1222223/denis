import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';
import Subtask from 'components/Subtask';

import './task.less';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var taskId = this.props.location.query.id;
        var tasks = this.props.tasks;
        var task = tasks.find((item)=>{
            return item.id == taskId;
        });

        var subtasksList = task.subtasks.map((item)=>{
           return (
               <Subtask key={item.id} subtask={item} />
           );
        });

        return (
            <div className='Task'>
                <Panel header={task.name} className={task.status}>
                    {subtasksList}
                </Panel>
            </div>
        );
    }
}

Task.propTypes = {};
Task.defaultProps = {};

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Task)
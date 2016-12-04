import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';
import ReactDOM from 'react-dom';
import Button  from 'react-bootstrap/lib/Button';
import FormControl  from 'react-bootstrap/lib/FormControl';
import InputGroup  from 'react-bootstrap/lib/InputGroup';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import Subtask from 'components/Subtask';
import { addSubtask } from '../../redux/actions/tasksActions';

import './task.less';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    onSubtaskAddClick(taskId) {
        var newSubtask = ReactDOM.findDOMNode(this.refs.newSubtask).value;
        this.props.addSubtask(newSubtask, taskId);
        ReactDOM.findDOMNode(this.refs.newSubtask).value = "";
    }
    
    render() {
        var taskId = this.props.location.query.id;
        var tasks = this.props.tasks;
        var task = tasks.find((item)=>{
            return item.id == taskId;
        });

        var subtasksList = task.subtasks.map((item)=>{
           return (
               <Subtask key={item.id} taskId={task.id} subtask={item} />
           );
        });

        var sprint = this.props.sprints.find((item)=>{
            return item.id == task.sprintId;
        });
        
        var header = function(){
            return (
                <div>
                    {task.name} | Category: {task.category} | Sprint: {sprint.name}
                </div>
            );
        };
        
        return (
            <div className='Task'>
                <Panel header={header()} className={task.status}>
                    {subtasksList}

                    <InputGroup>
                        <InputGroup.Button>
                            <Button bsStyle="success" onClick={this.onSubtaskAddClick.bind(this, taskId)}> + </Button>
                        </InputGroup.Button>
                        <FormControl type="text" placeholder="New subtask" ref="newSubtask"  />
                    </InputGroup>

                </Panel>
            </div>
        );
    }
}

Task.propTypes = {};
Task.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
    return {
        addSubtask: function(newSubtask, taskId) {
            dispatch(addSubtask(newSubtask, taskId));
        }
    }
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
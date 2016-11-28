import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import TaskShortcut from 'components/TaskShortcut';
import Panel  from 'react-bootstrap/lib/Panel';
import Table  from 'react-bootstrap/lib/Table';

import './sprint.less';

class Sprint extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var a  = $('td')[0];
        console.log(a);
    }

    render() {
        var sprintId = this.props.location.query.id;
        var tasks = this.props.tasks;

        var filterByStatus = function(status) {
            return tasks.filter((item)=>{
                return (item.status == status) && (item.sprintId == sprintId);
            });
        };

        var openTasks = filterByStatus("open");
        var progressTasks = filterByStatus("in-progress");
        var closedTasks = filterByStatus("closed");

        var generateTaskList = function(tasks) {
            return tasks.map((item) => {
                return (
                    <TaskShortcut key={item.id} task={item}/>
                );
            });
        };

        var openTasksList = generateTaskList(openTasks);
        var progressTasksList = generateTaskList(progressTasks);
        var closedTasksList = generateTaskList(closedTasks);


        var sprints = this.props.sprints;
        var sprintInfo = sprints.find((item)=>{
            return item.id == sprintId;
        });
        var sprintTitle = (
            <div>
                {sprintInfo.name}
                <br/>
                {sprintInfo.dates}
            </div>
        );

        return (
            <div className='Sprint'>
                <Panel header={sprintTitle} bsStyle="primary">
                    <Table striped bordered condensed hover className="statusTable">
                        <thead>
                        <tr>
                            <th className="open" id>Open</th>
                            <th className="progress">In progress</th>
                            <th className="closed">Closed</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="open">{openTasksList}</td>
                            <td className="progress">{progressTasksList}</td>
                            <td className="closed">{closedTasksList}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Panel>
            </div>
        );
    }
}

Sprint.propTypes = {};
Sprint.defaultProps = {};

function mapStateToProps (state) {
    return {
        tasks: state.tasks,
        sprints: state.sprints
    }
}

export default connect(mapStateToProps)(Sprint)
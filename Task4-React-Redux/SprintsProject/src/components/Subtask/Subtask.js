import React, { PropTypes, Component } from 'react';
import Panel  from 'react-bootstrap/lib/Panel';

class Subtask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Subtask'>
                <Panel>
                    {this.props.subtask.name}
                </Panel>
            </div>
        );
    }
}

Subtask.propTypes = {};
Subtask.defaultProps = {};

export default Subtask;
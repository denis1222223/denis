import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Button  from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { showAddSprint } from '../../redux/actions/modalsActions';

import './sideBar.less';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sprints = this.props.sprints;
        console.log(sprints);
        var sprintsList = sprints.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={"/sprint?id=" + item.id} className={this.props.sprintId == item.id ? "active":""}>
                        {item.name}
                    </Link>
                </li>
            );
        });

        return (
            <div className='sideBar'>
                <ul>
                    {sprintsList}
                </ul>
                <Button bsStyle="success" onClick={this.props.showAddSprint}> + </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAddSprint: function() {
            dispatch(showAddSprint());
        }
    }
};

SideBar.propTypes = {};

export default connect(null, mapDispatchToProps)(SideBar);
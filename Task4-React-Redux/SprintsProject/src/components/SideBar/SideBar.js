import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import { showAddSprint } from '../../redux/actions/modalsActions';
import { deleteSprint, editSprint } from '../../redux/actions/sprintsActions';

import './sideBar.less';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sprints = this.props.sprints;
        var sprintsList = sprints.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={"/sprint?id=" + item.id} className={this.props.sprintId == item.id ? "active":""}>
                        {item.name}
                    </Link>
                    <Button className="editSprintButton" bsSize="xsmall" bsStyle="warning"
                        onClick={this.props.editSprint.bind(null, item.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="deleteSprintButton" bsSize="xsmall" bsStyle="danger" 
                        onClick={this.props.deleteSprint.bind(null, item.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
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
        },
        deleteSprint: function(sprintId) {
            dispatch(deleteSprint(sprintId))
        },
        editSprint: function(sprintId) {
            console.log("edit");
            dispatch(editSprint(sprintId))
        }
    }
};

function mapStateToProps (state) {
    return {
        sprints: state.sprints
    }
}

SideBar.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
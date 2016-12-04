import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import { showAddSprintModal, showEditSprintModal } from '../../redux/actions/modalsActions';
import { deleteSprint } from '../../redux/actions/sprintsActions';

import './sideBar.less';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    onEditSprintClick(id) {
        var sprint = this.props.sprints.find((item)=>{
            return item.id == id;
        });
        this.props.showEditSprintModal({
            id: id,
            name: sprint.name,
            beginningDate: sprint.beginningDate,
            expirationDate: sprint.expirationDate
        });
    }

    getDeleteRedirectId(sprints, sprintId) {
        var deleteRedirect = "none";
        sprints.forEach((sprint) => {
            if (sprint.id != sprintId) {
                deleteRedirect = sprint.id;
            }
        });
        return deleteRedirect;
    }

    render() {
        var sprints = this.props.sprints;
        var deleteRedirect = this.getDeleteRedirectId.bind(this, sprints);
        var sprintsList = sprints.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={"/sprint?id=" + item.id} className={this.props.sprintId == item.id ? "active":""}>
                        {item.name}
                    </Link>
                    <Button className="smallButton editButton" bsSize="xsmall" bsStyle="warning"
                        onClick={this.onEditSprintClick.bind(this, item.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Link to={"/sprint?id=" + deleteRedirect(item.id)} className="deleteLink">
                        <Button className="smallButton deleteButton" bsSize="xsmall" bsStyle="danger"
                            onClick={this.props.deleteSprint.bind(null, item.id)}>
                            <Glyphicon glyph="glyphicon glyphicon-trash" />
                        </Button>
                    </Link>
                </li>
            );
        });

        return (
            <div className='sideBar'>
                <ul>
                    {sprintsList}
                </ul>
                <Button bsStyle="success" onClick={this.props.showAddSprintModal}> + </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAddSprintModal: function() {
            dispatch(showAddSprintModal());
        },
        deleteSprint: function(sprintId) {
            dispatch(deleteSprint(sprintId))
        },
        showEditSprintModal: function(sprintAttributes) {
            dispatch(showEditSprintModal(sprintAttributes))
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
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

    render() {
        var sprints = this.props.sprints;
        var sprintsList = sprints.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={"/sprint?id=" + item.id} className={this.props.sprintId == item.id ? "active":""}>
                        {item.name}
                    </Link>
                    <Button className="smallButton editSprintButton" bsSize="xsmall" bsStyle="warning"
                        onClick={this.onEditSprintClick.bind(this, item.id)}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="smallButton deleteSprintButton" bsSize="xsmall" bsStyle="danger" 
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
import React, { PropTypes, Component } from 'react';
import { Link, browserHistory  } from 'react-router';
import { connect } from 'react-redux';

import { showModal } from '../Modal/modalActions';
import { fillForm } from '../Forms/formActions';
import { deleteSprint, editSprint, addSprint } from '../Sprint/sprintsActions';
import SprintForm from '../Forms/SprintForm'

import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './sidebar.less';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    getDeleteRedirectId(sprints, sprintId) {
        var deleteRedirect = "none";
        sprints.forEach((sprint) => {
            if (sprint.get('id') != sprintId) {
                deleteRedirect = sprint.get('id');
            }
        });
        return deleteRedirect;
    }

    render() {
        var sprints = this.props.sprints;
        var deleteRedirect = this.getDeleteRedirectId.bind(this, sprints);
        var sprintsList = sprints.map((sprint) => {
            return (
                <li key={sprint.get('id')}>
                    <Link to={"/sprint?id=".concat(sprint.get('id'))} activeClassName='active'>
                        {sprint.get('name')}
                    </Link>
                    <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                        onClick={() => {
                            this.props.fillForm(editSprint, sprint);
                            this.props.showModal("Edit sprint", <SprintForm />);
                        }}>
                        <Glyphicon glyph="glyphicon glyphicon-edit" />
                    </Button>
                    <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                        onClick={() => {
                            this.props.deleteSprint(sprint.get('id'));
                            browserHistory.push("/sprint?id=" + deleteRedirect(sprint.get('id')));
                        }}>
                        <Glyphicon glyph="glyphicon glyphicon-trash" />
                    </Button>
                </li>
            );
        });

        return (
            <div className='sidebar'>
                <ul>
                    {sprintsList}
                </ul>
                <Button bsStyle="success" onClick={() => {
                        this.props.fillForm(addSprint);
                        this.props.showModal("Add sprint", <SprintForm />);
                    }}> + </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSprint: function(sprintId) {
            dispatch(deleteSprint(sprintId))
        },
        fillForm: function(action, item) {
            dispatch(fillForm(action, item))
        },
        showModal: function(title, body) {
            dispatch(showModal(title, body))
        }
    }
};

function mapStateToProps (state) {
    return {
        sprints: state.sprints
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
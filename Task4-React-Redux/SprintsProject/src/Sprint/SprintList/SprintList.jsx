import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { showModal } from '../../Common/Modal/modalActions';
import { deleteSprint, editSprint, addSprint } from '../sprintsActions';
import SprintForm from '../SprintForm'

import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

import './sprint-list.less';

class SprintList extends Component {
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

    getButtonsEditDelete(sprint, deleteRedirect) {
        var auth = this.props.auth;
        var buttonsEditDelete = "";
        if (auth && auth.isAdmin()) {
            buttonsEditDelete = <div>
                <Button className="small-button edit-button" bsSize="xsmall" bsStyle="warning"
                        onClick={() => {
                            this.props.showModal("Edit sprint", <SprintForm item={sprint} action={editSprint} auth={auth} />);
                        }}>
                    <Glyphicon glyph="glyphicon glyphicon-edit"/>
                </Button>
                <Button className="small-button delete-button" bsSize="xsmall" bsStyle="danger"
                        onClick={() => {
                            this.props.deleteSprint(auth, sprint.get('id'));
                            browserHistory.push("/sprint/" + deleteRedirect(sprint.get('id')));
                        }}>
                    <Glyphicon glyph="glyphicon glyphicon-trash"/>
                </Button>
            </div>;
        }
        return buttonsEditDelete;
    }

    render() {
        var sprints = this.props.sprints;
        var deleteRedirect = this.getDeleteRedirectId.bind(this, sprints);

        var auth = this.props.auth;
        var buttonAdd = "";
        if (auth && auth.isAdmin()) {
            buttonAdd = <Button bsStyle="success" onClick={() => {
                        this.props.showModal("Add sprint", <SprintForm action={addSprint} auth={auth} />);
                    }}> + </Button>;
        }

        if (auth) {
            auth.on('authentication_done', () => this.forceUpdate());
        }

        var sprintsList = sprints.map((sprint) => {
            return (
                <li key={sprint.get('id')}>
                    <Link to={"/sprint/".concat(sprint.get('id'))} activeClassName='active'>
                        {sprint.get('name')}
                    </Link>
                    {this.getButtonsEditDelete(sprint, deleteRedirect)}
                </li>
            );
        });

        return (
            <div className='sprint-list'>
                <ul>
                    {sprintsList}
                </ul>
                {buttonAdd}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSprint: function(auth, sprintId) {
            dispatch(deleteSprint(auth, sprintId))
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

export default connect(mapStateToProps, mapDispatchToProps)(SprintList);
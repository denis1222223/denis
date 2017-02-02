import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory }  from 'react-router';

import SprintList from '../Sprint/SprintList';
import Modal from '../Common/Modal';
import Spinner from '../Common/Spinner';
import {getAllSprints} from "../Sprint/sprintsActions";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class SprintsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {showSpinner: false};
    }

    componentDidMount() {
        let auth = this.props.auth;
        if (auth) {
            if (auth.loggedIn()) {
                this.props.getAllSprints.call(this, auth);
            }
            auth.on('logout', (url) => {
                auth.login();
                auth.saveRedirect(url);
            });
        }
    }

    render() {
        var children = null;
        let auth = this.props.auth;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, { auth })
        }

        var spinner = "";
        if (this.state.showSpinner) {
            spinner = <Spinner />;
        }

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <SprintList auth={this.props.auth}/>
                        </Col>
                        <Col xs={9} md={9}>
                            {children}
                        </Col>
                    </Row>
                </Grid>
                <Modal />
                {spinner}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSprints: function(auth) {
            this.setState({showSpinner: true});
            dispatch(getAllSprints(auth)).then((sprints) => {
                var id = sprints[sprints.length - 1].id;
                if (id) {
                    if (browserHistory.getCurrentLocation().pathname === '/home') {
                        browserHistory.push('/sprint/' + id);
                    }
                }
                this.setState({showSpinner: false});
            });
        }
    }
};

export default connect(null, mapDispatchToProps)(SprintsManager);
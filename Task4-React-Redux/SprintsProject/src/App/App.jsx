import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory }  from 'react-router';

import SprintList from '../Sprint/SprintList';
import Header from '../Common/Header';
import Modal from '../Common/Modal';
import Spinner from '../Common/Spinner';
import {getAllSprints} from "../Sprint/sprintsActions";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import 'bootstrap-less/bootstrap/index.less';
import './app.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {showSpinner: false};
    }

    componentDidMount() {
        this.props.getAllSprints.apply(this, this.props.route.auth);
    }

    render() {
        let children = null;
        let auth = this.props.route.auth;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, { auth })
        }

        var spinner = "";
        if (this.state.showSpinner) {
            spinner = <Spinner />;
        }

        return (
            <div>
                <Header auth={auth}/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <SprintList auth={auth}/>
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
                    if (browserHistory.getCurrentLocation().pathname === '/') {
                        browserHistory.push('/sprint/' + id);
                        auth.saveRedirect('/sprint/' + id);
                    }
                }
                this.setState({showSpinner: false});
            });
        }
    }
};

export default connect(null, mapDispatchToProps)(App);

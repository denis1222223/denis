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
import 'isomorphic-fetch';import AuthService from "../utils/AuthService";
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       // this.props.getAllSprints();
    }
    test() {
        const auth = new AuthService('oilR1LjDBljihKuZaN4bZ2fFZpaCwWs7', 'denis1222223.eu.auth0.com');
        var authoriz = "Bearer " + auth.getToken();

        var options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: '{"client_id":"oilR1LjDBljihKuZaN4bZ2fFZpaCwWs7","client_secret":"WrzdpfeRAs83Z40zVTqYveBR5gnz9YrK3E0RNLQnJ8Ez6SS3uOE9YJWlHLyeldd3","audience":"http://localhost:58105/","grant_type":"client_credentials"}'
            ,mode: 'no-cors'
        };
        fetch('https://denis1222223.eu.auth0.com/oauth/token', options).then(res1 => {
            return res1.json();
        }).then(json => {
            console.log(json);
        });


        // fetch("/api/claims/", {
        //     headers: new Headers({
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'authorization': authoriz
        //     })
        // }).then(response => {
        //     return response.json();
        // }).then(res => {
        //     console.log(res);
        // });

    }
    render() {
        let children = null;
        let auth = this.props.route.auth;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, { auth })
        }

        return (

            <div>
                <button onClick={() => { this.test() }}>button</button>
                <Header auth={auth}/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <SprintList />
                        </Col>
                        <Col xs={9} md={9}>
                            {children}
                        </Col>
                    </Row>
                </Grid>
                <Modal />
                <Spinner />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSprints: function() {
            dispatch(getAllSprints()).then((sprints) => {
                var id = sprints[sprints.length - 1].id;
                if (id) {
                    browserHistory.push('/sprint/' + id);
                }
            });
        }
    }
};

export default connect(null, mapDispatchToProps)(App);

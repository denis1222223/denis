import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory }  from 'react-router';
import 'isomorphic-fetch';

import Table from 'react-bootstrap/lib/Table';

import 'bootstrap-less/bootstrap/index.less';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    getRows() {

    }

    componentDidMount() {
        // var auth = this.props.auth;
        // if (auth) {
        //     var headers = new Headers({
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + auth.getToken()
        //     });
        //
        //     fetch("https://denis1222223.eu.auth0.com/api/v2/users", {
        //         headers,
        //         method: "get"
        //     }).then(response => {
        //         if (response.ok) {
        //             console.log(response.json());
        //         }
        //         throw new Error();
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        // }
    }

    render() {
        var rows = this.getRows();
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Permissions</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </Table>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(null, mapDispatchToProps)(Admin);

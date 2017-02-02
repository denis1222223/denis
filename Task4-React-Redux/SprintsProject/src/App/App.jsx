import React, { Component } from 'react';
import Header from '../Common/Header';

import 'bootstrap-less/bootstrap/index.less';
import './app.less';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children = null;
        let auth = this.props.route.auth;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, { auth })
        }

        return (
            <div>
                <Header auth={auth}/>
                {children}
            </div>
        );
    }
}

export default App;
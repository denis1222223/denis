import React, { Component, PropTypes } from 'react';
import './app.less';

const propTypes = {
    children: PropTypes.node
};

class App extends Component {

    render() {
        return (
            <div>
                <div className="sideBar">
                    <ul>
                        <a href="#" ><li>hello</li></a>
                        <a href="#" ><li>hello</li></a>
                        <a href="#" ><li>hello</li></a>
                        <a href="#"><li>hello</li></a>
                        <a href="#" ><li>hello</li></a>
                        <a href="#" ><li>hello</li></a>
                    </ul>
                </div>
                <div className="main">
                    fg
                </div>


                {/*
                <Grid>
                    {this.props.children}
                </Grid>
                */}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
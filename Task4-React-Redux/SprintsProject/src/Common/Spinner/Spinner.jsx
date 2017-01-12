import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';

import './spinner.less';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var visible = this.props.show ? "show" : "hide";
        return (
            <div className={"spinner ".concat(visible)}>
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        show: state.spinner.get('show')
    }
}

export default connect(mapStateToProps)(Spinner)
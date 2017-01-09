import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import src from './spinner.gif';

import './spinner.less';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var visible = this.props.show ? "show" : "hide";
        return (
            <div className={'spinner '.concat(visible)} >
                <img src={src}/>
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
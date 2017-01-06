import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';

//import { hideModal } from './modalActions';

class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return(
            <Spinner className>
                modal.get('show')
            </Spinner>
        );
    }
}

function mapStateToProps (state) {
    return {
        spinner: state.spinner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide: function() {
         //  dispatch(hideModal());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)

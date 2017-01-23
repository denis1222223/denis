import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';

import { hideModal } from './modalActions';
import Spinner from '../Spinner'
import ModalBox  from 'react-bootstrap/lib/Modal';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var modal = this.props.modal;

        return(
            <ModalBox show={modal.get('show')} onHide={this.props.hide} bsSize="small">
                <ModalBox.Header closeButton>
                    <ModalBox.Title>{modal.get('title')}</ModalBox.Title>
                </ModalBox.Header>
                <ModalBox.Body>
                    { modal.get('body') }
                </ModalBox.Body>
            </ModalBox>
        );
    }
}

function mapStateToProps (state) {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide: function() {
           dispatch(hideModal());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';

import { hideModal } from './modalActions';
import SprintForm from '../Forms/SprintForm';
import TaskForm from '../Forms/TaskForm';

import ModalBox  from 'react-bootstrap/lib/Modal';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    getComponent(name) {
        switch (name) {
            case "SprintForm": return <SprintForm/>;
            case "TaskForm": return <TaskForm/>;
        }
    }

    render() {
        var modal = this.props.modal;
        var body = this.getComponent(modal.get('body'));

        return(
            <ModalBox show={modal.get('show')} onHide={this.props.hide} bsSize="small">
                <ModalBox.Header closeButton>
                    <ModalBox.Title>{modal.get('title')}</ModalBox.Title>
                </ModalBox.Header>
                <ModalBox.Body>
                    {body}
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
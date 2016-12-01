import { SHOW_ADD_SPRINT_MODAL, SHOW_EDIT_SPRINT_MODAL, HIDE_SPRINT_MODAL } from 'redux/constants';
import initialState from './initialState';
import { addSprint, editSprint } from '../../actions/sprintsActions';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ADD_SPRINT_MODAL:
            return {...state, sprintModal: {
                show: true,
                title: 'Add sprint',
                name: '',
                beginningDate: '',
                expirationDate: '',
                action: addSprint
            }};
        case SHOW_EDIT_SPRINT_MODAL:
            return {...state, sprintModal: {
                id: action.payload.id,
                show: true,
                title: 'Edit sprint',
                name: action.payload.name,
                beginningDate: action.payload.beginningDate,
                expirationDate: action.payload.expirationDate,
                action: editSprint
            }};
        case HIDE_SPRINT_MODAL:
            return {...state, sprintModal: {...state.sprintModal, show: false}};
        default:
            return state;
    }
}
import { SHOW_ADD_SPRINT_MODAL, SHOW_EDIT_SPRINT_MODAL, HIDE_SPRINT_MODAL } from 'redux/constants';

export function showAddSprintModal() {
    return {
        type: SHOW_ADD_SPRINT_MODAL
    };
}

export function showEditSprintModal(sprintAttributes) {
    return {
        type: SHOW_EDIT_SPRINT_MODAL,
        payload: sprintAttributes
    };
}

export function hideSprintModal() {
    return {
        type: HIDE_SPRINT_MODAL
    };
}
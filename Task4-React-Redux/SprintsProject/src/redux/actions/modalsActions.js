import { SHOW_ADD_SPRINT_MODAL, SHOW_EDIT_SPRINT_MODAL, HIDE_SPRINT_MODAL, 
    SHOW_ADD_TASK_MODAL, HIDE_TASK_MODAL, SHOW_EDIT_TASK_MODAL } from 'redux/constants';

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

export function showAddTaskModal(sprintId) {
    return {
        type: SHOW_ADD_TASK_MODAL,
        payload: sprintId
    };
}

export function hideTaskModal() {
    return {
        type: HIDE_TASK_MODAL
    };
}

export function showEditTaskModal(taskAttributes) {
    return {
        type: SHOW_EDIT_TASK_MODAL,
        payload: taskAttributes
    };
}
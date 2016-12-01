import { DELETE_SPRINT, ADD_SPRINT, EDIT_SPRINT } from 'redux/constants';

export function addSprint(sprintInfo) {
    return {
        type: ADD_SPRINT,
        payload: sprintInfo
    };
}

export function deleteSprint(sprintId) {
    return {
        type: DELETE_SPRINT,
        payload: sprintId
    };
}

export function editSprint(sprintId) {
    return {
        type: EDIT_SPRINT,
        payload: sprintId
    };
}
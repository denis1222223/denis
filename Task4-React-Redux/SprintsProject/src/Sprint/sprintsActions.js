export const ADD_SPRINT = 'ADD_SPRINT';
export const DELETE_SPRINT = 'DELETE_SPRINT';
export const EDIT_SPRINT = 'EDIT_SPRINT';

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

export function editSprint(sprintInfo) {
    return {
        type: EDIT_SPRINT,
        payload: sprintInfo
    };
}
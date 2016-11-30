import { SELECT_SPRINT, ADD_SPRINT } from 'redux/constants';

export function selectSprint(sprintId) {
    return {
        type: SELECT_SPRINT,
        payload: sprintId
    };
}

export function addSprint(sprintInfo) {
    return {
        type: ADD_SPRINT,
        payload: sprintInfo
    };
}
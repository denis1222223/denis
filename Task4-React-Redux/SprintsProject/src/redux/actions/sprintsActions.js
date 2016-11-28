import { SELECT_SPRINT } from 'redux/constants';

export function selectSprint(sprintId) {
    return {
        type: SELECT_SPRINT,
        payload: sprintId
    };
}
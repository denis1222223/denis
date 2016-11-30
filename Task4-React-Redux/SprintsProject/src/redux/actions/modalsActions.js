import { SHOW_ADD_SPRINT, HIDE_ADD_SPRINT } from 'redux/constants';

export function showAddSprint() {
    return {
        type: SHOW_ADD_SPRINT
    };
}

export function hideAddSprint() {
    return {
        type: HIDE_ADD_SPRINT
    };
}
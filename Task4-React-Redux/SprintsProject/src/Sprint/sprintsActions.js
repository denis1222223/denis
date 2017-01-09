import { fetchCall, receive } from '../Common/fetchCall';
import {showSpinner} from "../Common/Spinner/spinnerActions";

export const ADD_SPRINT = 'ADD_SPRINT';
export const DELETE_SPRINT = 'DELETE_SPRINT';
export const EDIT_SPRINT = 'EDIT_SPRINT';
export const GET_ALL_SPRINTS = 'GET_ALL_SPRINTS';

function addSprintToState(sprint) {
    return {
        type: ADD_SPRINT,
        sprint
    };
}

export function addSprint(sprint) {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Sprints", "POST", sprint).then(sprint => {
            dispatch(receive(addSprintToState(sprint)));
        });
    }
}

function deleteSprintFromState(sprintId) {
    return {
        type: DELETE_SPRINT,
        sprintId
    };
}

export function deleteSprint(sprintId) {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Sprints/" + sprintId, "DELETE").then(id => {
            dispatch(receive(deleteSprintFromState(id)));
        });
    }
}

function editSprintInState(sprint) {
    return {
        type: EDIT_SPRINT,
        sprint
    };
}

export function editSprint(sprint) {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Sprints/" + sprint.id, "PUT", sprint).then(sprint => {
            dispatch(receive(editSprintInState(sprint)));
        });
    }
}

function loadAllSprintsToState(sprints) {
    return {
        type: GET_ALL_SPRINTS,
        sprints
    }
}

export function getAllSprints() {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Sprints", "GET").then(sprints => {
            dispatch(receive(loadAllSprintsToState(sprints)));
        });
    }
}
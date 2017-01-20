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

export function addSprint(auth, sprint) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "sprints", method: "POST", body: sprint}).then(sprint => {
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

export function deleteSprint(auth, sprintId) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "sprints/" + sprintId, method: "DELETE"}).then(id => {
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

export function editSprint(auth, sprint) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "sprints/" + sprint.id, method: "PUT", body: sprint}).then(sprint => {
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

export function getAllSprints(auth) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "sprints", method: "GET"}).then(sprints => {
            dispatch(receive(loadAllSprintsToState(sprints)));
            return sprints;
        });
    }
}
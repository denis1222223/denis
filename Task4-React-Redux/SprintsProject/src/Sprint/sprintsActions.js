import { domen } from '../Common/apiUrls'

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
        return fetch(domen + "Sprints", {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: "POST",
            body: JSON.stringify(sprint)
        }).then(response => {
            return response.json();
        }).then(sprint => {
            dispatch(addSprintToState(sprint));
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
        return fetch(domen + "Sprints/" + sprintId, {
            method: "DELETE"
        }).then(response => {
            return response.json();
        }).then(sprint => {
            dispatch(deleteSprintFromState(sprint.id));
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
        return fetch(domen + "Sprints/" + sprint.id, {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: "PUT",
            body: JSON.stringify(sprint)
        }).then(response => {
            return response.json();
        }).then(sprint => {
            dispatch(editSprintInState(sprint));
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
        return fetch(domen + "Sprints").then(response => {
            return response.json();
        }).then(sprints => {
            dispatch(loadAllSprintsToState(sprints))
        });
    }
}
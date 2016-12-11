export const DELETE_SUBTASK = 'DELETE_SUBTASK';
export const ADD_SUBTASK = 'ADD_SUBTASK';

export function deleteSubtask(id) {
    return {
        type: DELETE_SUBTASK,
        payload: id
    };
}

export function addSubtask(subtask) {
    return {
        type: ADD_SUBTASK,
        payload: subtask
    };
}
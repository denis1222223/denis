import { DELETE_TASK, ADD_TASK, EDIT_TASK, DELETE_SUBTASK, ADD_SUBTASK } from './tasksActions';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            var id = -1;
            if (state.length) {
                id = state[state.length - 1].id;
            }
            var newTask = {
                id: ++id,
                name: action.payload.name,
                status: action.payload.status,
                category: action.payload.category,
                subtasks: [],
                sprintId: action.payload.sprintId
            };
            return [...state, newTask];

        case DELETE_TASK:
            var id = action.payload;
            return state.filter((item) => {
                return item.id != id;
            });

        case EDIT_TASK:
            return state.map((item) => {
                if (item.id == action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });

        case DELETE_SUBTASK:
            return state.map((item) => {
                if (item.id != action.payload.taskId) {
                    return item;
                }
                return {...item, subtasks: item.subtasks.filter((subtask) => {
                    if (subtask.id != action.payload.id) {
                        return subtask;
                    }
                })}
            });

        case ADD_SUBTASK:
            return state.map((item) => {
                if (item.id != action.payload.taskId) {
                    return item;
                }
                return {...item, subtasks: [...item.subtasks, {
                    name: action.payload.subtask,
                    id: item.subtasks.length ? item.subtasks[item.subtasks.length - 1].id + 1 : 0
                }]}
            });

        default:
            return state;
    }
}
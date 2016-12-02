import { DELETE_TASK, ADD_TASK, EDIT_TASK, DELETE_SUBTASK, ADD_SUBTASK } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            var id = state[state.length-1].id;
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
            var newTask = state.find((task) => {
               return task.id == action.payload.taskId;
            });
            delete newTask.subtasks[action.payload.id];
            return [...state.filter((item) => {
                return item.id != action.payload.taskId;
            }), newTask];

        case ADD_SUBTASK:
            var newTask = state.find((task) => {
                return task.id == action.payload.taskId;
            });
            var id = -1;

            if (newTask.subtasks.length) {
                id = newTask.subtasks[newTask.subtasks.length - 1].id;
            }
            newTask.subtasks = [...newTask.subtasks, {
                id: ++id,
                name: action.payload.subtask
            }];

            return [...state, newTask];

        default:
            return state;
    }
}
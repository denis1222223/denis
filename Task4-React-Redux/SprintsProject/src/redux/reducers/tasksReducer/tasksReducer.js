import { DELETE_TASK, ADD_TASK, EDIT_TASK } from 'redux/constants';
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
        default:
            return state;
    }
}
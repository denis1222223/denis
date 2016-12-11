import { DELETE_TASK, ADD_TASK, EDIT_TASK } from './tasksActions';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            var id = state.length ? state[state.length - 1].id + 1 : 0;
            return [...state, { id, ...action.payload }];

        case DELETE_TASK:
            return state.filter((task) => {
                return task.id != action.payload;
            });

        case EDIT_TASK:
            return state.map((task) => {
                if (task.id == action.payload.id) {
                    return action.payload;
                } else {
                    return task;
                }
            });

        default:
            return state;
    }
}
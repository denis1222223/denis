import { DELETE_TASK, ADD_TASK, EDIT_TASK } from './tasksActions';
import initialState from './initialState';
import {Map} from 'immutable';

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            var id = state.size ? state.last().get('id') + 1 : 0;
            return state.push(new Map({ id, ...action.payload }));

        case DELETE_TASK:
            return state.filter((task) => {
                return task.get('id') != action.payload;
            });

        case EDIT_TASK:
            return state.map((task) => {
                if (task.get('id') == action.payload.id) {
                    return new Map(action.payload);
                } else {
                    return task;
                }
            });

        default:
            return state;
    }
}
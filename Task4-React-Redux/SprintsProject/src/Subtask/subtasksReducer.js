import { DELETE_SUBTASK, ADD_SUBTASK } from './subtasksActions';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {

        case DELETE_SUBTASK:
            return state.filter((subtask) => {
               return subtask.id != action.payload;
            });

        case ADD_SUBTASK:
            var id = state.length ? state[state.length - 1].id + 1 : 0;
            return [...state, { id, ...action.payload }];

        default:
            return state;
    }
}
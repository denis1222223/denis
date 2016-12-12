import { DELETE_SUBTASK, ADD_SUBTASK } from './subtasksActions';
import initialState from './initialState';
import {Map} from 'immutable';

export default function(state = initialState, action) {
    switch (action.type) {

        case DELETE_SUBTASK:
            return state.filter((subtask) => {
               return subtask.get('id') != action.payload;
            });

        case ADD_SUBTASK:
            var id = state.size ? state.last().get('id') + 1 : 0;
            return state.push(new Map({ id, ...action.payload }));

        default:
            return state;
    }
}
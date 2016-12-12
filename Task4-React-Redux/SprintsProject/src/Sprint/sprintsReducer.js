import { DELETE_SPRINT, ADD_SPRINT, EDIT_SPRINT } from './sprintsActions';
import initialState from './initialState';
import {Map} from 'immutable';

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_SPRINT:
            var id = state.size ? state.last().get('id') + 1 : 0;
            return state.push(new Map({ id, ...action.payload }));

        case DELETE_SPRINT:
            return state.filter((sprint) => {
                return sprint.get('id') != action.payload;
            });

        case EDIT_SPRINT:
            return state.map((sprint) => {
                if (sprint.get('id') == action.payload.id) {
                    return new Map(action.payload);
                } else {
                    return sprint;
                }
            });
        
        default:
            return state;
    }
}
import { DELETE_SPRINT, ADD_SPRINT, EDIT_SPRINT } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_SPRINT:
            var id = state[state.length-1].id;
            var newSprint = {
                id: ++id,
                beginningDate: action.payload.beginning,
                expirationDate: action.payload.expiration,
                name: action.payload.name
            };
            return [...state, newSprint];

        case DELETE_SPRINT:
            var id = action.payload;
            return state.filter((item) => {
                return item.id != id;
            });

        case EDIT_SPRINT:
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
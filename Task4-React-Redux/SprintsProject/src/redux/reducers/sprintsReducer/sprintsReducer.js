import { SELECT_SPRINT, ADD_SPRINT } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_SPRINT:
            return {...state, selectedSprint: action.payload};
        case ADD_SPRINT:
            var id = initialState[initialState.length-1].id;
            var newSprint = {
                id: ++id,
                dates: action.payload.beginning + " - " + action.payload.expiration,
                name: action.payload.name
            };
            return [...state, newSprint];
        default:
            return state;
    }
}
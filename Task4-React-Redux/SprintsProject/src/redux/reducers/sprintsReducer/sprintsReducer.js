import { SELECT_SPRINT } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_SPRINT:
            return {...state, selectedSprint: action.payload};
        default:
            return state;
    }
}
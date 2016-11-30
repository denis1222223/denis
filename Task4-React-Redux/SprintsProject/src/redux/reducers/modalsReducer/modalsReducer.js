import { SHOW_ADD_SPRINT, HIDE_ADD_SPRINT } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ADD_SPRINT:
            return {...state, addSprint: {
                show: true
            }};
        case HIDE_ADD_SPRINT:
            return {...state, addSprint: {
                show: false
            }};
        default:
            return state;
    }
}
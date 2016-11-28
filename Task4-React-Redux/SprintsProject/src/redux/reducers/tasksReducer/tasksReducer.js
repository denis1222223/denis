import { INCREMENT_COUNTER } from 'redux/constants';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
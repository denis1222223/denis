import { SHOW_SPINNER, HIDE_SPINNER} from './spinnerActions';
import initialState from './initialState';
import {Map} from 'immutable';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return Map({
                show: true,
                counter: state.get('counter') + 1
            });

        case HIDE_SPINNER:
            var counter = state.get('counter') - 1;
            return Map({
                show: counter != 0,
                counter
            });

        default:
            return state;
    }
}
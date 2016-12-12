import { SHOW_MODAL, HIDE_MODAL } from './modalActions';
import initialState from './initialState';
import {Map} from 'immutable';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Map({
                show: true,
                title: action.payload.title,
                body: action.payload.body
            });

        case HIDE_MODAL:
            return state.set('show', false);

        default:
            return state;
    }
}
import { FILL_FORM } from './formActions';
import {Map} from 'immutable';

export default function(state = new Map(), action) {
    switch (action.type) {
        case FILL_FORM:
            return new Map({
                action: action.payload.action,
                item: action.payload.item
            });

        default:
            return state;
    }
}
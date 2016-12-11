import { FILL_FORM } from './formActions';

export default function(state = {}, action) {
    switch (action.type) {
        case FILL_FORM:
            return {
                action: action.payload.action,
                item: action.payload.item
            };

        default:
            return state;
    }
}
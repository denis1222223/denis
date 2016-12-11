import { SHOW_MODAL, HIDE_MODAL } from './modalActions';
import initialState from './initialState';
import { addSprint, editSprint } from '../Sprint/sprintsActions';
import { addTask, editTask } from '../Task/tasksActions';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                show: true,
                title: action.payload.title,
                body: action.payload.body
                // action: action.payload.action,
                // item: action.payload.item
            };

        case HIDE_MODAL:
            return {show: false};

        default:
            return state;
    }
}
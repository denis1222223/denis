import { DELETE_SUBTASK, ADD_SUBTASK, GET_ALL_SUBTASKS } from './subtasksActions';
import initialState from './initialState';
import {Map} from 'immutable';
import Immutable from 'immutable';

export default function(state = Immutable.fromJS([]), action) {
    switch (action.type) {

        case GET_ALL_SUBTASKS:
            return Immutable.fromJS(action.subtasks);

        case DELETE_SUBTASK:
            return state.filter((subtask) => {
               return subtask.get('id') != action.subtaskId;
            });

        case ADD_SUBTASK:
            return state.push(new Map(action.subtask));

        default:
            return state;
    }
}
import { DELETE_TASK, ADD_TASK, EDIT_TASK, GET_ALL_TASKS } from './tasksActions';
import {Map} from 'immutable';
import Immutable from 'immutable';

export default function(state = Immutable.fromJS([]), action) {
    switch (action.type) {

        case GET_ALL_TASKS:
            return Immutable.fromJS(action.tasks);

        case ADD_TASK:
            return state.push(new Map(action.task));

        case DELETE_TASK:
            return state.filter((task) => {
                return task.get('id') != action.taskId;
            });

        case EDIT_TASK:
            return state.map((task) => {
                if (task.get('id') == action.task.id) {
                    return new Map(action.task);
                } else {
                    return task;
                }
            });

        default:
            return state;
    }
}
import { DELETE_SPRINT, ADD_SPRINT, EDIT_SPRINT, GET_ALL_SPRINTS } from './sprintsActions';
import initialState from './initialState';
import {Map} from 'immutable';
import Immutable from 'immutable';


export default function(state = Immutable.fromJS([]), action) {
    switch (action.type) {

        case GET_ALL_SPRINTS:
            return action.sprints ? Immutable.fromJS(action.sprints) : state;

        case ADD_SPRINT:
            return state.push(new Map(action.sprint));

        case DELETE_SPRINT:
            return state.filter((sprint) => {
                return sprint.get('id') != action.sprintId;
            });

        case EDIT_SPRINT:
            return state.map((sprint) => {
                if (sprint.get('id') == action.sprint.id) {
                    return new Map(action.sprint);
                } else {
                    return sprint;
                }
            });
        
        default:
            return state;
    }
}
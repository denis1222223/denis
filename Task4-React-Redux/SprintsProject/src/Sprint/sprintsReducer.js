import { DELETE_SPRINT, ADD_SPRINT, EDIT_SPRINT } from './sprintsActions';
import initialState from './initialState';
import {Map} from 'immutable';
import fetch from 'isomorphic-fetch';

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_SPRINT:
            var id = state.size ? state.last().get('id') + 1 : 0;
            return state.push(new Map({ id, ...action.payload }));

            // var url = "http://localhost:10702/api/Sprints";
            // fetch(url, {
            //     headers: new Headers({
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }),
            //     method: "POST",
            //     body:  JSON.stringify({ ...action.payload })
            // }).then(response => {
            //     return response.json();
            // }).then(sprint => {
            //     state = state.push(new Map(sprint));
            //     console.log(state.toJS());
            // });

        case DELETE_SPRINT:
            return state.filter((sprint) => {
                return sprint.get('id') != action.payload;
            });

        case EDIT_SPRINT:
            return state.map((sprint) => {
                if (sprint.get('id') == action.payload.id) {
                    return new Map(action.payload);
                } else {
                    return sprint;
                }
            });
        
        default:
            return state;
    }
}
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import tasksReducer from './Task/tasksReducer';
import sprintsReducer from './Sprint/sprintsReducer';
import modalsReducer from './Modals/modalsReducer';

var rootReducer = combineReducers({
    tasks: tasksReducer,
    sprints: sprintsReducer,
    modals: modalsReducer
});

export default function (initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
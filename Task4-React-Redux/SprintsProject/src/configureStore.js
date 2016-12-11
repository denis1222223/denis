import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import tasksReducer from './Task/tasksReducer';
import sprintsReducer from './Sprint/sprintsReducer';
import modalReducer from './Modal/modalReducer';
import formReducer from './Forms/formReducer';

var rootReducer = combineReducers({
    tasks: tasksReducer,
    sprints: sprintsReducer,
    modal: modalReducer,
    form: formReducer
});

export default function (initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
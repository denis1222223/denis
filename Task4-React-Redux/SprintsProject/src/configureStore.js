import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import tasksReducer from './Task/tasksReducer';
import subtasksReducer from './Subtask/subtasksReducer';
import sprintsReducer from './Sprint/sprintsReducer';
import modalReducer from './Modal/modalReducer';
import formReducer from './Forms/formReducer';

var rootReducer = combineReducers({
    tasks: tasksReducer,
    subtasks: subtasksReducer,
    sprints: sprintsReducer,
    modal: modalReducer,
    form: formReducer
});

export default function (initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
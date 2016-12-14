import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import tasksReducer from './Task/tasksReducer';
import subtasksReducer from 'Task/Subtask/subtasksReducer';
import sprintsReducer from './Sprint/sprintsReducer';
import modalReducer from 'Common/Modal/modalReducer';

var rootReducer = combineReducers({
    tasks: tasksReducer,
    subtasks: subtasksReducer,
    sprints: sprintsReducer,
    modal: modalReducer
});

export default function (initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
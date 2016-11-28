import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import sprintsReducer from './sprintsReducer';

export default combineReducers({
    tasks: tasksReducer,
    sprints: sprintsReducer
});
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import sprintsReducer from './sprintsReducer';
import modalsReducer from './modalsReducer';

export default combineReducers({
    tasks: tasksReducer,
    sprints: sprintsReducer,
    modals: modalsReducer
});
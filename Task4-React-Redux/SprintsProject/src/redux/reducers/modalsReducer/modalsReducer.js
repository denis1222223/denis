import { SHOW_ADD_SPRINT_MODAL, SHOW_EDIT_SPRINT_MODAL, HIDE_SPRINT_MODAL, 
    SHOW_ADD_TASK_MODAL, HIDE_TASK_MODAL, SHOW_EDIT_TASK_MODAL } from 'redux/constants';
import initialState from './initialState';
import { addSprint, editSprint } from '../../actions/sprintsActions';
import { addTask, editTask } from '../../actions/tasksActions';

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ADD_SPRINT_MODAL:
            return {...state, sprintModal: {
                show: true,
                title: 'Add sprint',
                name: '',
                beginningDate: '',
                expirationDate: '',
                action: addSprint
            }};
        case SHOW_EDIT_SPRINT_MODAL:
            return {...state, sprintModal: {
                id: action.payload.id,
                show: true,
                title: 'Edit sprint',
                name: action.payload.name,
                beginningDate: action.payload.beginningDate,
                expirationDate: action.payload.expirationDate,
                action: editSprint
            }};
        case HIDE_SPRINT_MODAL:
            return {...state, sprintModal: {...state.sprintModal, show: false}};

        case SHOW_ADD_TASK_MODAL:
            return {...state, taskModal: {
                show: true,
                title: 'Add task',
                name: '',
                status: 'open',
                category: '',
                action: addTask,
                statusDefault: 'open',
                sprintDefault: action.payload
            }};
        case HIDE_TASK_MODAL:
            return {...state, taskModal: {...state.taskModal, show: false}};
        case SHOW_EDIT_TASK_MODAL:
            return {...state, taskModal: {
                id: action.payload.id,
                show: true,
                title: 'Edit task',
                name: action.payload.name,
                status: action.payload.status,
                category: action.payload.category,
                sprintId: action.payload.sprintId,
                action: editTask,
                sprintDefault: action.payload.sprintId,
                statusDefault: action.payload.status
            }};
        default:
            return state;
    }
}
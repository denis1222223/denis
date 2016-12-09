import { addSprint } from '../Sprint/sprintsActions';
import { addTask } from '../Task/tasksActions';

const initialState = {
    sprintModal: {
        show: false,
        title: 'Add Sprint',
        name: '',
        beginningDate: '',
        expirationDate: '',
        action: addSprint
    },
    taskModal: {
        show: false,
        title: 'Add Task',
        name: '',
        status: 'open',
        category: '',
        action: addTask
    }
};

export default initialState;
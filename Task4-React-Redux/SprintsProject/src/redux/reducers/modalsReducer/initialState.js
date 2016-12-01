import { addSprint } from '../../actions/sprintsActions';
import { addTask } from '../../actions/tasksActions';

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
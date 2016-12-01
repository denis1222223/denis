import { addSprint } from '../../actions/sprintsActions';

const initialState = {
    sprintModal: {
        show: false,
        title: 'Add Sprint',
        name: '',
        beginningDate: '',
        expirationDate: '',
        action: addSprint
    }
};

export default initialState;
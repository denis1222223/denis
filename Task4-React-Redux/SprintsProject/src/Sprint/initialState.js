import Immutable from 'immutable';

const initialState = Immutable.fromJS([
    {
        id: 0,
        name: "Sprint №0",
        beginningDate: "05/30/2012",
        expirationDate: "06/23/2014"
    },
    {
        id: 1,
        name: "Sprint №1",
        beginningDate: "02/21/2014",
        expirationDate: "03/23/2014"
    },
    {
        id: 2,
        name: "Sprint №2",
        beginningDate: "12/05/2005",
        expirationDate: "12/05/2005"
    },
    {
        id: 3,
        name: "Sprint №3",
        beginningDate: "01/13/2014",
        expirationDate: "11/02/2014"
    },
    {
        id: 4,
        name: "Sprint №4",
        beginningDate: "12/12/2012",
        expirationDate: "01/15/2013"
    }
]);

export default initialState;
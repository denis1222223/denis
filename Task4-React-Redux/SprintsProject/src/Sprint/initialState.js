import Immutable from 'immutable';
import fetch from 'isomorphic-fetch';

var initialState = [];
// var url = "http://localhost:10702/api/Sprints";
// fetch(url).then(response => {
//     return response.json();
// }).then(json => {
//     console.log(json);
//     initialState = json;
// });

export default Immutable.fromJS(initialState);

// const initialState = Immutable.fromJS([
//     {
//         id: 0,
//         name: "Sprint №0",
//         beginningDate: "05/30/2012",
//         expirationDate: "06/23/2014"
//     },
//     {
//         id: 1,
//         name: "Sprint №1",
//         beginningDate: "02/21/2014",
//         expirationDate: "03/23/2014"
//     },
//     {
//         id: 2,
//         name: "Sprint №2",
//         beginningDate: "12/05/2005",
//         expirationDate: "12/05/2005"
//     },
//     {
//         id: 3,
//         name: "Sprint №3",
//         beginningDate: "01/13/2014",
//         expirationDate: "11/02/2014"
//     },
//     {
//         id: 4,
//         name: "Sprint №4",
//         beginningDate: "12/12/2012",
//         expirationDate: "01/15/2013"
//     }
// ]);

// export default initialState;
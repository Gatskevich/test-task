// interface actionType {
//     type:string,
//     payload : {
//         FirstName: string,
//         LastName: string,
//         Username: string
//     }
// }
const initialState = {
    currentUser: []
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'REGISTR_USER':
            return {currentUser: action.payload}
        default: 
            return state;
    }
}

export default reducer;
// interface actionType {
//     type:string,
//     payload : {
//         FirstName: string,
//         LastName: string,
//         Username: string
//     }
// }

const initialState = {
    currentUser: [],
    userName: false
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'REGISTR_USER':
            return {
                ...state,
                currentUser: action.payload,
                userName: state.userName  
            }
        case 'ADD_CHECK':
            return {
                ...state,
                currentUser: state.currentUser,
                userName: action.payload
            }    
        default: 
            return state;
    }
}

export default reducer;
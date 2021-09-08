import {InitialStateInterface, ActionInterface} from '../interfaces/interfaces'

const initialState:InitialStateInterface= {
    currentUser: [],
    checkUser: false
}

const reducer = (state = initialState, action:ActionInterface) => {
    switch (action.type) {
        case 'REGISTR_USER':
            return {
                ...state,
                currentUser: action.payload,
                checkUser: state.checkUser  
            }
        case 'ADD_CHECK':
            return {
                ...state,
                currentUser: state.currentUser,
                checkUser: action.payload
            }    
        default: 
            return state;
    }
}

export default reducer;
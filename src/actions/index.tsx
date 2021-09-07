import {RegUserInfo} from '../interfaces/interfaces'


const registrUser = (newUser:RegUserInfo) => {
    return {
        type: 'REGISTR_USER',
        payload: newUser
    }
}
const checkUsername = (checked:boolean) => {
    return {
        type: 'ADD_CHECK',
        payload: checked
    }
}


export {
    registrUser,
    checkUsername
};
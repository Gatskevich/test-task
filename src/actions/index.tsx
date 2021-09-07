
interface RegUserInfo {
  Username: string,
  FirstName: string,
  LastName: string
}

const registrUser = (newUser:RegUserInfo) => {
    return {
        type: 'REGISTR_USER',
        payload: newUser
    }
}
const keepUsername = (checked:boolean) => {
    return {
        type: 'ADD_CHECK',
        payload: checked
    }
}


export {
    registrUser,
    keepUsername
};
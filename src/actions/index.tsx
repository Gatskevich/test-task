
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

export {
    registrUser
    
};
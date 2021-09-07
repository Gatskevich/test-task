export interface ActionInterface{
    type:string,
    payload: boolean
  
}

export interface UserInfo {
    Username: string,
    Password: string,
    FirstName: string,
    LastName: string
  
}
  
export interface ShortUserInfo {
    Username: string,
    Password: string
}

export interface InitialStateInterface{
    currentUser:   Array<number>,
    checkUser: boolean
}

export interface RegUserInfo {
    Username: string,
    FirstName: string,
    LastName: string
}

export interface StateProps{
    checkUsername: (checked: boolean ) => void,
}

export interface HistoryProps {
    history: {
        push(url: string): void;
    };
}

export interface CurrentUserInterface{
    username: string,
    firstName: string,
    lastName: string
}

export interface ReducerInterfaces {
    currentUser: CurrentUserInterface,
    checkUser:boolean
}

export interface StateInterfaces {
    reducer: ReducerInterfaces
}
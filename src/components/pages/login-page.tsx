import React from 'react';
import LoginForm from '../login-form'
import Service from '../../services/services'

interface Props {
    history: {
        push(url: string): void;
    };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainPage = (props:Props) => {
    const ser = new Service();
    const newToken= ()=>{
        ser.getRefreshFetch();
       
    }
    const addItem = () => {
        setInterval(newToken, 240000);
        setTimeout(()=>props.history.push('/infopage'),500);

    }
    return (
        <div>
            <LoginForm  onAdd={addItem}/>
        </div>
        
    )
}


export default MainPage;
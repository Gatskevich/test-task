import React from 'react';
import RegistartionForm from '../ registration-form'
import Service from '../../services/services'

interface Props {
    history: {
        push(url: string): void;
    };
}

const RegistrationPage = (props:Props) => {
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
            <RegistartionForm   
                onAdd={addItem}
            />
            
        </div>
        
    )
}


export default RegistrationPage;
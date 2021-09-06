import React, {useEffect}from 'react';
import ChangeForm from '../change-form'
import Service from '../../services/services'


interface Props {
  history: {
      push(url: string): void;
  };
}


const ChangeFormPage = (props:Props) => {
  const ser = new Service();
    useEffect(() => {
        ser.getProfileFetch()
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            localStorage.clear();
          } 
        })
        if(!localStorage.getItem("refreshToken")){
            props.history.push('/')
            setTimeout(()=>alert("Registration required"),300);
        } 
      });
  
    return (
        <div>
            <ChangeForm/>
        </div>
        
    )
}


export default ChangeFormPage;
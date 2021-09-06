import React, {useEffect}from 'react';
import InfoUser from '../info-user'
import {registrUser} from '../../actions';
import Service from '../../services/services'
import {connect} from 'react-redux';

interface StateProps{

  registrUser: (
    data:{
      FirstName: string,
      LastName: string,
      Username: string
    }) => void,

}
interface HistoryProps {
  history: {
    push(url: string): void;
  };
}
type Props = StateProps & HistoryProps

const InfoPage = (props:Props) => {
    const ser = new Service();
    useEffect(() => {
        ser.getProfileFetch()
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            localStorage.clear();
          } else {
            props.registrUser(data)
          }
        })
        if(!localStorage.getItem("refreshToken")){
            props.history.push('/')
            setTimeout(()=>alert("Registration required"),300);
        } 
      });
  
    return (
        <div>
            <InfoUser  />
        </div>
        
    )
}
const mapDispatchToProps = {
    registrUser

}


export default connect(null, mapDispatchToProps)(InfoPage) ;
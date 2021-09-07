import React from 'react';
import LoginForm from '../login-form'
import {keepUsername} from '../../actions';
import Service from '../../services/services'
import {connect} from 'react-redux';

interface HistoryProps {
    history: {
        push(url: string): void;
    };
}
interface StateProps{
    keepUsername: (checked: boolean ) => void,
  
}
type Props = HistoryProps & StateProps
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainPage = (props:Props) => {
    const ser = Service.getInstance();
    const newToken= ()=>{
        ser.getRefreshFetch()
        .then((data:any) => {
            localStorage.setItem("acessToken", data.data.tokens.acessToken)
            localStorage.setItem("refreshToken", data.data.tokens.refreshToken)
        })
        .catch((data:any) => {
            localStorage.clear();
            props.keepUsername(false)
        })  
       
    }
    const addItem = () => {
        const timing:number = +localStorage.getItem("exparedAt")!*1000;
        setInterval(newToken, timing - 60000);
        setTimeout(()=>props.history.push('/infopage'),900);
    }
    return (
        <div>
            <LoginForm  onAdd={addItem}/>
        </div>
        
    )
}

const mapDispatchToProps = {
    keepUsername
  
  }
  
  
export default connect(null, mapDispatchToProps)(MainPage) ;
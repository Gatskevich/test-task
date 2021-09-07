import React, { Suspense, lazy, useEffect}from 'react'
import { Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {keepUsername,registrUser} from '../../actions';
import Service from '../../services/services'
import AppHeader from '../app-header';
import './app.scss';


const InfoPage :any = lazy(() => import('../pages/info-page'));
const RegistrationPage = lazy(() => import('../pages/registretion-page'));
const LoginPage = lazy(() => import('../pages/login-page'));
const ChangeFormPage:any = lazy(() => import('../pages/change-form-page'));

interface KeepUsernameProps{
  keepUsername: (checked: boolean ) => void,

}
interface StateProps{
  registrUser: (
    data:{
      FirstName: string,
      LastName: string,
      Username: string
    }) => void,

}
interface UserNameProps{
  userName:boolean

}

type Props = StateProps & UserNameProps & KeepUsernameProps
const App = (props:Props) => {
  const ser = Service.getInstance();
  useEffect(() => {
    ser.getProfileFetch()
    .then((data)=>{
      props.keepUsername(true);
      props.registrUser(data.data);
    })
    .catch(() => {
      localStorage.clear();
      props.keepUsername(false);
    })
    // return () => {
      
    // }
  }, []);
  return (
    <div>
      <AppHeader/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route  path = '/infopage'>
          {!props.userName ? <Redirect to="/registration" /> : <InfoPage />}
          </Route>
          <Route  path = '/changeform'>
          {!props.userName ? <Redirect to="/registration" /> : <ChangeFormPage />}
          </Route>
          <Route  path = '/registration' exact component={RegistrationPage}/>
          <Route path='/' exact component={LoginPage}/>
        </Switch>
      </Suspense>
    </div>
  )
}

const mapStateToProps =  (state: UserNameProps) =>{
  return {
      userName: state.userName,
  }
}
const mapDispatchToProps = {
  registrUser,
  keepUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;

import React, { Suspense, lazy, useEffect}from 'react'
import { Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkUsername,registrUser} from '../../actions';
import Service from '../../services/services'
import AppHeader from '../app-header';
import './app.scss';


const InfoPage :any = lazy(() => import('../pages/info-page'));
const RegistrationPage = lazy(() => import('../pages/registretion-page'));
const LoginPage = lazy(() => import('../pages/login-page'));
const ChangeFormPage:any = lazy(() => import('../pages/change-form-page'));

interface CheckUsernameProps{
  checkUsername: (checked: boolean ) => void,

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

type Props = StateProps & UserNameProps & CheckUsernameProps


const App = (props:any) => {
  const ser = Service.getInstance();
  useEffect(() => {
    ser.getProfileUser()
    .then((data)=>{
      props.checkUsername(true);
      props.registrUser(data.data);
    })
    .catch(() => {
      localStorage.clear();
      props.checkUsername(false);
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
          {!props.checkUser ? <Redirect to="/registration" /> : <InfoPage />}
          </Route>
          <Route  path = '/changeform'>
          {!props.checkUser ? <Redirect to="/registration" /> : <ChangeFormPage />}
          </Route>
          <Route  path = '/registration' exact component={RegistrationPage}/>
          <Route path='/' exact component={LoginPage}/>
        </Switch>
      </Suspense>
    </div>
  )
}

const mapStateToProps =  (state: any) =>{
  return {
    checkUser: state.reducer.checkUser,
  }
}
const mapDispatchToProps = {
  registrUser,
  checkUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
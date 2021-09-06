import React, { Suspense, lazy }from 'react'
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import './app.scss';


const InfoPage = lazy(() => import('../pages/info-page'));
const RegistrationPage = lazy(() => import('../pages/registretion-page'));
const LoginPage = lazy(() => import('../pages/login-page'));
const ChangeFormPage = lazy(() => import('../pages/change-form-page'));


const App: React.FC = () => {
  
    return (
      <div>
        <AppHeader/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route  path = '/registration' exact component={RegistrationPage}/>
            <Route  path = '/changeform' exact component={ChangeFormPage}/>
            <Route  path = '/infopage' exact component={InfoPage}/>
            <Route path='/' exact component={LoginPage}/>
          </Switch>
        </Suspense>
      </div>
    )
}

export default App;
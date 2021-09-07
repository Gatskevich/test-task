import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from '../login-form'


const MainPage = () => {

    return (
        <div>
            <Route component={LoginForm}/>
        </div>
        
    )
}

  
  export default MainPage ;
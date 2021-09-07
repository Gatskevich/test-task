import React from 'react';
import {Route} from 'react-router-dom';
import InfoUser from '../info-user'



const InfoPage = () => {
  
    return (
        <div>
               <Route component={InfoUser}/>
        </div>
        
    )
}


export default InfoPage;
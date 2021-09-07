import React from 'react';
import { connect } from 'react-redux';
import {CurrentUserInterface, StateInterfaces} from '../../interfaces/interfaces'
import './info-user.scss';

interface StateProps {
    currentUser: CurrentUserInterface
}
const InfoUser = (props:StateProps) => {
    return (
        
        <div>
            <h2 className="info__heading">Username:<span className="info__heading__span">{props.currentUser.username}</span></h2>
            <h2 className="info__heading">FirstName:<span  className="info__heading__span">{props.currentUser.firstName}</span></h2>
            <h2 className="info__heading">LastName:<span  className="info__heading__span">{props.currentUser.lastName}</span></h2>
        </div>
        
    )
}
const mapStateToProps =  (state: StateInterfaces) =>{
    console.log("State", state);
    return {
        currentUser: state.reducer.currentUser,
    }
}
export default connect(mapStateToProps, null)(InfoUser) ;
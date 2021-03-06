import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {checkUsername} from '../../actions';
import Service from '../../services/services'
import {connect} from 'react-redux';
import ServiceToken from '../../services/servicesToken'
import {StateProps, HistoryProps} from '../../interfaces/interfaces'
import './login-form.scss';


type Props = HistoryProps & StateProps

const LoginForm = (props:Props) => {
  const ser = Service.getInstance();
  const serToken = new ServiceToken();
    const [form , setForm] = useState({
        email: '',
        password: ''
    })

  const submitForm = (e:any) => {
    e.preventDefault();
    ser.postData('api/login',{
      Username: form.email,
      Password: form.password,
    })
    .then((data:any) => {
      props.checkUsername(true)
      serToken.addToken(data);
      setTimeout(()=>props.history.push('/infopage'),900);
    })  
    .catch((data:any) => {
      console.log(data);
    })
  };
    return (
        <form className="registration-form" onSubmit={submitForm}>
        <h2 className="registration-form__heading">Sign in</h2>
        <div className="registration-form__blok">
          <label className="registration-form__label">Email address</label>
          <TextField type="email" name="email"  onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        </div>
        <div className="registration-form__blok">
          <label className="registration-form__label" htmlFor="password">Password</label>
          <TextField type="password"name="password"  onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        </div>
        <Button type="submit">
           Sign in
        </Button>
      </form>
    )
}

const mapDispatchToProps = {
  checkUsername

}

export default connect(null, mapDispatchToProps)(LoginForm) ;
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {keepUsername} from '../../actions';
import Service from '../../services/services'
import {connect} from 'react-redux';
import './login-form.scss';
type OnAddClick = {
  onAdd: () => void;
};
interface StateProps{
  keepUsername: (checked: boolean ) => void,

}
type Props = OnAddClick & StateProps
const LoginForm = (props:Props) => {
  const ser = Service.getInstance();
    const [form , setForm] = useState({
        email: '',
        password: ''
    })

    const submitForm = (e:any) => {
      e.preventDefault();
      ser.postData('http://react-test.somee.com/api/login',{
        Username: form.email,
        Password: form.password,
      })
      .then((data:any) => {
        props.keepUsername(true)
        localStorage.setItem("acessToken", data.data.tokens.acessToken)
        localStorage.setItem("refreshToken", data.data.tokens.refreshToken)
        localStorage.setItem("exparedAt", data.data.tokens.exparedAt)
        props.onAdd();
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
  keepUsername

}

export default connect(null, mapDispatchToProps)(LoginForm) ;
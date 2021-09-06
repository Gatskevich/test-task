import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Service from '../../services/services'
import './login-form.scss';
type OnAddClick = {
  onAdd: () => void;
};

const LoginForm = (props:OnAddClick) => {
  const ser = new Service();
    const [form , setForm] = useState({
        email: '',
        password: ''
    })

    const submitForm = (e:any) => {
      e.preventDefault();
      ser.userLoginFetch({
        Username: form.email,
        Password: form.password,
      });
      props.onAdd();
        
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

export default LoginForm;
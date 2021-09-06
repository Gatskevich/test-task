import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Service from '../../services/services'
import './registration-form.scss';


type OnAddClick = {
  onAdd: () => void;
};

function RegistrationForm({onAdd}:OnAddClick) {
  const ser = new Service();
  const [form , setForm] = useState({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    })
    const submitForm = (e:any) => {
    e.preventDefault();
    ser.userPostFetch({
      Username: form.email,
      Password: form.password,
      FirstName: form.firstName,
      LastName: form.lastName
    });
    onAdd();
  }
    return (
      <form className="registration-form" onSubmit ={submitForm}>
        <h2 className="registration-form__heading">Sign up</h2>
        <div className="registration-form__blok">
          <label className="registration-form__label">Email address</label>
          <TextField  type='email' name='email'  onChange={(e:any) => setForm({ ...form, email: e.target.value })}/>
        </div>
        <div className="registration-form__blok">
          <label className="registration-form__label" htmlFor="password">Password</label>
          <TextField type="password"name="password"  onChange={(e:any) => setForm({ ...form, password: e.target.value })}/>
        </div>
        <div className="registration-form__blok">
          <label className="registration-form__label" htmlFor="firstName">FirstName</label>
          <TextField type="firstName" name="firstName"  onChange={(e:any) => setForm({ ...form, firstName: e.target.value })}/>
        </div>
        <div className="registration-form__blok">
          <label className="registration-form__label" htmlFor="lastName">LastName</label>
          <TextField type="lastName" name="lastName"  onChange={(e:any) => setForm({ ...form, lastName: e.target.value })}/>
        </div>
        <Button type="submit">
           Sign up
        </Button>
      </form>
    )
}


export default RegistrationForm;

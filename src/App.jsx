import { useState } from 'react'
import './App.css'

function App() {
  const [useForm, setUseForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const [useFormError, setuseFormError] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  })
  const inputHendler = (e) => {
    const {value, name} = e.target;
    setUseForm({
      ...useForm,
      [name]:value,
    });
  };


  const submitHendler = (e) =>{
    e.preventDefault();
    errorHendler();
  };

  const errorHendler = (e) => {
    const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors={};
    if(useForm.firstName.trim()==="")
      errors.firstName = "First Name cannot be empty"
    if(useForm.lastName.trim()==="")
      errors.lastName = "Last Name cannot be empty"
    if(!emailRegex.test(useForm.emailAddress))
      errors.email = "Looks like this is not an email"
    if(useForm.password.trim()==="")
      errors.password = "Password cannot be empty"
    setuseFormError(errors);
  };


  return (
    <div className='body-div'>
      <h1 className='title'>Learn to code by watching others</h1>
      <p className='description'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
      <div className="free-trial-div">
        <p className='free-trial'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
      </div>
      <div className="form-div">
        <form onSubmit={submitHendler}>
          <input onChange={inputHendler} name='firstName' type="text" placeholder='First Name'/>
          {useFormError.firstName && (<span className='error'>{useFormError.firstName}</span>)}
          <input onChange={inputHendler} name='lastName' type="text" placeholder='Last Name'/>
          {useFormError.lastName && (<span className='error'>{useFormError.lastName}</span>)}
          <input onChange={inputHendler} name='emailAddress' type="text" placeholder='Email Address'/>
          {useFormError.email && (<span className='error'>{useFormError.email}</span>)}
          <input onChange={inputHendler} name='password' type="password" placeholder='Password'/>
          {useFormError.password && <span className='error'>{useFormError.password}</span>}
          <button type='submit'>CLAIM YOUR FREE TRIAL</button>
          <p className='button-instruction'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </form>
      </div>
      
      
    </div>
  )
}

export default App

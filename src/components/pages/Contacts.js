import React, {useState} from 'react';
import {validateEmail} from '../../utils/validateEmail';

function Contacts(){
   const [contacts, setContacts] = useState({name:'', email:'', message:''});
   const {name, email,message} = contacts;
   const [errorMessage, setErrorMessage] = useState('');

   const handleChange = (e) => {
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         if(!isValid){
            setErrorMessage('Email is not Valid')
         } else {
            setErrorMessage('')
         }
      } else {
         if (!e.target.name.length) {
            setErrorMessage(`${e.target.name} is required, please`)
         } else {
            setErrorMessage('');
         }
      }
      if (!errorMessage) {
         setContacts({...contacts, [e.target.name]: e.target.value});
      }
   };
   
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(contacts);
   }

   return(
      <section className='form-container'>
         <form className='form' onSubmit = {handleSubmit}>
         <h1 className = 'form-title'>Contact Me</h1>
            <div>
               <label htmlFor = 'name'>Your Name:</label>
               <input type = 'text' name='name' defaultValue={name} onBlur = {handleChange} />
            </div>
            <div>
               <label htmlFor = 'email'>Email Adress:</label>
               <input type = 'email' name='email' defaultValue={email} onBlur = {handleChange} />
            </div>
            <div>
               <label htmlFor = 'message'>Message</label>
               <textarea name="message" defaultValue = {message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
               <div className='form-error-message'>
                  <p>{errorMessage}</p>
               </div>
            )}
            <button className='btn form-submit-btn' type='submit'>Submit</button>
         </form>
      </section>
   )
}

export default Contacts
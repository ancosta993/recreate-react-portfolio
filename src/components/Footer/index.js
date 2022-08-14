import React from 'react';

function Footer(){
   return(
      <footer>
         <div class='icon-container'>
            <a className='icon-link' href='https://github.com/ancosta993'>
               <img alt='github link' src={require('../../assets/icons/github-icon.png')}/>
               <span>Github</span>
            </a>
            <a className='icon-link' href='mailto:adcosta2000@gmail.com'>
               <img alt='mail link' src={require('../../assets/icons/mail-icon.png')}/>
               <span>E-mail</span>
            </a>
            <div className='icon-link'>
               <img alt='phone icon' src={require('../../assets/icons/phone-icon.png')}/>
               <span>(301)-408-8137</span>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
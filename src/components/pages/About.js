import React from 'react';

function About(){
   return (
    <>
      <section className='about-container'>
        <img className='about-image' src={require(`../../assets/150.png`)} alt='Anthony'/>
        <p className='about-text'>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </section>
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
    </>
    );
}

export default About
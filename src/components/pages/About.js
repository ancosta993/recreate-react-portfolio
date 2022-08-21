import React from 'react';

function About(){
  
   return (
    <>
      <section className='about-container'>
        <img className='about-image' src={require(`../../assets/150.png`)} alt='Anthony'/>
        <p className='about-text'>
        Hi! I am Anthony Dcosta. I am a Community College Student majoring in Electrical Engineering. I am also training in a coding bootcamp by Michigan State Universty to become a web developer. This a collection of some of the projects I have worked on in the past. 
        
        Solving Algorithm related problem is my hobby and something I think about just before falling asleep. developing website allows me to apply this hobby of mine and at the same time allow others to validate my work. I am more than willing to take on web developing project.
        </p>
      </section>
    </>
    );
}

export default About
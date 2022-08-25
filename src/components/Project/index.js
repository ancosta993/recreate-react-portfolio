import React from 'react';

function Project(){
   <li className='photo'>

      <img className='photo-img'  
      alt='baseball-organizer' 
      src={require('../../assets/projects/baseball-organizer.PNG')}/>

      <div className='photo-text'>
         Baseball Organizer
         <a href='#'><span className='deployed'>Deployed</span></a>
         <a href='#'><span className='git-repo'>Git Repo</span></a>
      </div>

   </li>
};

export default Project;
import React from 'react';
import {formatProjName} from '../../utils/helpers'

function Project({name, deployedLink, gitLink}){

   return(
      // defining the skeleton code for displaying each projects. It is getting information from an object prop.
      <li className='photo'>
         <img className='photo-img'  
         alt='baseball-organizer' 
         src={require(`../../assets/projects/${name}.PNG`)}/>

         <div className='photo-text'>
            {formatProjName(name)}
            <a href={deployedLink}><span className='deployed'>Deployed</span></a>
            <a href={gitLink}><span className='git-repo'>Git Repo</span></a>
         </div>
      </li>
   )
};

export default Project;
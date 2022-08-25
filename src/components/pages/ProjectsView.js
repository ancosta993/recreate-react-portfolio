import React, {useState} from 'react';
import Project from '../Project'

function ProjectsView(){
   // initializing a state with list containing objects. Each objects contains
   // necessary infromation for rendering each projects
   const [testObj, setTestObj] = useState([
      {
         name: 'baseball-organizer',
         deployedLink:'#',
         gitLink:"#"
      },
      {
         name: 'note-taker',
         deployedLink:'#',
         gitLink:'#'
      },
      {
         name: 'run-buddy',
         deployedLink:'#',
         gitLink:'#'
      },
      {
         name: 'stream-searcher',
         deployedLink:'#',
         gitLink:'#'
      },
      {
         name: 'tech-blog',
         deployedLink:'#',
         gitLink:'#'
      },
      {
         name: 'work-day-schedular',
         deployedLink:'#',
         gitLink:'#'
      },
      {
         name: 'zookeeper',
         deployedLink:'#',
         gitLink:'#'
      },
      
   ])
   
   return(
     <section className='project-container'>
      <ul className='photo-group'>
         {/* each object from the loop is taken as props for rendering the 
         'Project' component */}
         {testObj.map(obj => {
            return(
               <Project name={obj.name} deployedLink={obj.deployedLink} gitLink={obj.gitLink}></Project>
            )
         })}
         
      </ul>
     </section>
   )
}

export default ProjectsView
import React, {useState} from 'react';
import Project from '../Project'

function ProjectsView(){
   // initializing a state with list containing objects. Each objects contains
   // necessary infromation for rendering each projects
   const [testObj] = useState([
      {
         name: 'baseball-organizer',
         deployedLink:'#',
         gitLink:"https://github.com/pizzo1jr/Baseball-Organizer-"
      },
      {
         name: 'note-taker',
         deployedLink:'https://ancosta993.github.io/note-taker',
         gitLink:'https://github.com/ancosta993/note-taker'
      },
      {
         name: 'run-buddy',
         deployedLink:'https://ancosta993.github.io/run-buddy/',
         gitLink:'https://github.com/ancosta993/run-buddy'
      },
      {
         name: 'stream-searcher',
         deployedLink:'https://dcolli50.github.io/Stream-Searcher/',
         gitLink:'https://github.com/Dcolli50/Stream-Searcher'
      },
      {
         name: 'tech-blog',
         deployedLink:'#',
         gitLink:'https://github.com/ancosta993/tech-blog'
      },
      {
         name: 'work-day-schedular',
         deployedLink:'https://ancosta993.github.io/work-day-schedular',
         gitLink:'https://github.com/ancosta993/work-day-schedular'
      },
      {
         name: 'zookeeper',
         deployedLink:'https://ancosta993.github.io/zookeepr',
         gitLink:'https://github.com/ancosta993/zookeepr'
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
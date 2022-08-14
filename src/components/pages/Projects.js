import React, {useState} from 'react';

function Projects(){
   const [photos] = useState([
      {
         name:'Baseball Organizer',
         location: '../../assets/projects/baseball-organizer.PNG'
      },
      {
         name:'Note Taker',
         location: '../../assets/projects/note-taker.PNG'
      },
      {
         name:'Run Buddy',
         location: '../../assets/projects/run-buddy.PNG'
      },
      {
         name:'Stream Searcher',
         location: '../../assets/projects/stream-searcher.PNG'
      },
      {
         name:'Tech Blog',
         location: '../../assets/projects/tech-blog.PNG'
      },
      {
         name:'Work Day Schedular',
         location: '../../assets/projects/work-day-schedular.PNG'
      },
      {
         name:'Zookeeper',
         location: '../../assets/projects/zookeeper.PNG'
      }
   ]);

   return(
     <section className='project-container'>
      <ul className='photo-group'>
         <li className='photo'>

            <img className='photo-img'  
            alt='baseball-organizer' 
            src={require('../../assets/projects/baseball-organizer.PNG')}/>

            <div className='photo-text'>
               Baseball Organizer
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>

         </li>
         <li className='photo'>
            <img className='photo-img' 
            alt='note-taker' 
            src={require('../../assets/projects/note-taker.PNG')}/>
            
            <div className='photo-text'>
               Note Taker
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='run-buddy' src={require('../../assets/projects/run-buddy.PNG')}/>
            <div className='photo-text'>
               Run Buddy
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='stream-searcher' src={require('../../assets/projects/stream-searcher.PNG')}/>
            <div className='photo-text'>
               Stream Searcher
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='tech-blog' src={require('../../assets/projects/tech-blog.PNG')}/>
            <div className='photo-text'>
               Tech Blog
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='work-day-schedular' src={require('../../assets/projects/work-day-schedular.PNG')}/>
            <div className='photo-text'>
               Work Schedular
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
         <li className='photo'>
            <img className='photo-img' alt='zookeeper' src={require('../../assets/projects/zookeeper.PNG')}/>
            <div className='photo-text'>
               Zookeeper
               <a href='#'>Deployed</a>
               <a href='#'>Git Repo</a>
            </div>
         </li>
      </ul>
     </section>
   )
}

export default Projects
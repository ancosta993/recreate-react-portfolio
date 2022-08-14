import React from 'react';

function Resume(){
   return (
      <section className = 'resume-container'>
        <h2>
          Resume
        </h2>

        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    );
}

export default Resume
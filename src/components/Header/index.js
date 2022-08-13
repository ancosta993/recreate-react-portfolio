import React from 'react';

function Header({showStartPage, setShowStartPage}) {
   const renderPortfolio = () =>{
      setShowStartPage(!showStartPage)
   }
   return (
      <div className = 'startPageContainer'>
         <h1 className='startPageTitle'>Hi! Welcome To My Portfolio</h1>
         <button className='btn startPageBtn' onClick={() => {renderPortfolio()}}> Get Started </button>
      </div>
   )
};

export default Header

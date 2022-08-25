import React from 'react';
import Nav from '../Nav';

function Header({currentPage, handleCurrentPage}){

   return(
      <header className = 'nav-tabs'>
         <h1 className='nav-title'>Anthony Dcosta</h1>
         <Nav 
            currentPage={currentPage} 
            handleCurrentPage={handleCurrentPage}>
          </Nav>
      </header>
   )
}

export default Header;
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import PortfolioPage from './components/PortfolioPage';
import Nav from './components/Nav';


function App() {
  const [showStartPage , setShowStartPage] = useState(true);
  const [currentPage, setCurrentPage] = useState('About');
   const handleCurrentPage = (page) => {
      setCurrentPage(page);
   }

  return (
    <>
      {showStartPage ? (
        <Header 
          showStartPage={showStartPage} 
          setShowStartPage={setShowStartPage}>
        </Header>
      ):(
        <>
          <Nav 
              currentPage={currentPage} 
              handleCurrentPage={handleCurrentPage}>
          </Nav>
          <main>
            <PortfolioPage
              currentPage={currentPage} 
              handleCurrentPage={handleCurrentPage}>
            </PortfolioPage>
          </main>
        </>       
      )}
    </>
    
  );
}

export default App;

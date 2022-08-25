import './App.css';
import React, {useState} from 'react';
import StartPage from './components/StartPage';
import PortfolioPage from './components/PortfolioPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [showStartPage , setShowStartPage] = useState(true);
  const [currentPage, setCurrentPage] = useState('About');
   const handleCurrentPage = (page) => {
      setCurrentPage(page);
   }

  return (
    <>
      {showStartPage ? (
        <StartPage 
          showStartPage={showStartPage} 
          setShowStartPage={setShowStartPage}>
        </StartPage>
      ):(
        <>
          <Header 
              currentPage={currentPage} 
              handleCurrentPage={handleCurrentPage}>
          </Header>
          <main>
            <PortfolioPage
              currentPage={currentPage} 
              handleCurrentPage={handleCurrentPage}>
            </PortfolioPage>
          </main>
          <Footer></Footer>
        </>       
      )}
    </>
    
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  const [currentPage, setCurrentPage] = useState('About');  

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {/* <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio> */}

        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }

      </main>
    </div>
  );
}

export default App;

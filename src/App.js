import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigate from './components/Nav';
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
      <Navigate 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </main>
    </div>
  );
}

export default App;

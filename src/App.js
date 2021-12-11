import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
  return (
    <div class="container">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;

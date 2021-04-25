import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [pages] = useState([
    {name: 'about me' },
    {name: 'projects'},
    {name: 'resume'},
    {name: 'contact'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.scss';

// TODO: Header and Footer margin issue in >1024px

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';
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

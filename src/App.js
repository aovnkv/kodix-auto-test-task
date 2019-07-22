import React from 'react';
import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;

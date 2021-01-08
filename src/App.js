import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MidStatus from './components/MidStatus';
import MidEngineering from './components/MidEngineering';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle `
  h1{
    margin:0;
    padding:0;
    font-size: 3.125rem;
    font-weight: bold;
    color: #6c63ff;
  }
  h2{
    margin:0;
    padding:0;
    font-size: 1.875rem;
    font-weight: normal;
    color: #6c63ff;
  }
  h3{
    margin:0;
    padding:0;
    font-size: 1.625rem;
    font-weight: normal;
    color: #6c63ff;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
      <MidStatus/>
      <MidEngineering/>
      <Footer/>
    </>
  );
}

export default App;

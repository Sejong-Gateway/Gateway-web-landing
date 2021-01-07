import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MidStatus from './components/MidStatus';
import MidEngineering from './components/MidEngineering';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle `
  h1{
    margin:0;
    padding:0;
    font-size: 50px;
    font-weight: bold;
    color: #6c63ff;
  }
  h2{
    margin:0;
    padding:0;
    font-size: 30px;
    font-weight: normal;
    color: #6c63ff;
  }
  h3{
    margin:0;
    padding:0;
    font-size: 26px;
    font-weight: normal;
    color: #6c63ff;
  }
`
const pageStyle = styled.div `
  .responsive {
    width:1440px;
    margin: 0 auto;

  }
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <pageStyle>
      <Header/>
      <MidStatus/>
      <MidEngineering/>
      <Footer/>
    </pageStyle>
    </>
  );
}

export default App;

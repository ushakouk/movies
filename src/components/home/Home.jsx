import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import './home.scss';

function Home(props) {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default Home;
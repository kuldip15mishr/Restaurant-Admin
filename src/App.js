import React, { Component, Fragment } from 'react';
import $ from 'jquery';

import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/style.scss';
import Header from './base/header/Header';
import Footer from './base/footer/Footer';
import MainBody from './base/mainBody/MainBody';

class App extends Component {
  render() {
    return (
      <Fragment>
       
        <Header></Header>
        <MainBody></MainBody>
       <Footer></Footer>
        
        </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import '../sass/main.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// import Interface from './Interface';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <Main />
          <Footer />
      </Fragment>
    );
  }
}

export default App;

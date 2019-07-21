import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../sass/main.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      
        !this.props.isPurchasing ? (
          <Fragment>
            <Header />
            <Main />
            <Footer />
          </Fragment>
          ) : (
            <Fragment>
              <div className={'purchase__process'}><FontAwesomeIcon icon={faSpinner} color={'#333'} spin={true} size={'3x'} /><p>결제 진행중입니다...</p></div>
            </Fragment>
          )
    );
  }
}

const mapStateToProps = (state) => {
  let obj = {};
  
  for(let i in state.interfaceReducer){
    if(state.interfaceReducer.hasOwnProperty(i)){
      obj[i] = state.interfaceReducer[i]
    }
  }
  return obj;
};

export default connect(mapStateToProps, null)(App);

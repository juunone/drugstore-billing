import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Interface extends Component{
  render(){  
    return(
        <Fragment>
          <Header />
          <Main />
          <Footer />
        </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = (state) => {
    let obj = {};
  
    for(let i in state.interfaceReducer){
      if(state.interfaceReducer.hasOwnProperty(i)){
        obj[i] = state.interfaceReducer[i]
      }
    }
    return obj;
};


export default connect(mapStateToProps, mapDispatchToProps)(Interface);
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Button from './Button';

class Footer extends Component{
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render(){
      return(
          <footer>
              <div className={'footer__wrapper'}>
                <div className={'total cb_clear'}>
                  <span className={'total__text'}>합계</span>
                  <strong className={'total__price'}>{this.props.totalPrice}원</strong>
                </div>
                <div><Button type="next" text="다음" /></div>
              </div>
          </footer>
      )
  }
}

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = (state) => {
  console.log(state);
    let obj = {};

    for(let i in state.interfaceReducer){
      if(state.interfaceReducer.hasOwnProperty(i)){
        obj[i] = state.interfaceReducer[i]
      }
    }
    return obj;
};

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
  
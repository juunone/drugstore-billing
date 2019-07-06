import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Button from './Button';

class Footer extends Component{
  constructor(props) {
    super(props);    
  }

  _completeSelected = (headerType) => {  
    this.props._handleCompleteSelected(headerType);
  }

  _renderFooterType(type) {      
    switch(type){
      case 'main':          
        return (
          <div className={'footer__wrapper'}>
            <div className={'total cb_clear'}>
              <span className={'total__text'}>합계</span>
              <strong className={'total__price'}>{this.props.totalPrice}원</strong>
            </div>
            <div><Button type="next" text="다음" /></div>
          </div>
        );
      case 'surgery':
      case 'discount':
        return (
          <div className={'footer__wrapper select'}>
            <p>{type === 'surgery' ? '서비스를 선택하세요(3개 이상)' : '할인을 선택하세요'}</p>
            <div>
              <Button 
                type="next complete" 
                text="완료"
                totalSelected={type === 'surgery' ? this.props.totalSelectedSurgery : this.props.totalSelectedDiscount} 
                click={this._completeSelected}
                headerType={type}
              />
            </div>
          </div> 
        );
      default:
        return (
          <div className={'footer__wrapper'}>
            <div className={'total cb_clear'}>
              <span className={'total__text'}>합계</span>
              <strong className={'total__price'}>{this.props.totalPrice}원</strong>
            </div>
            <div><Button type="next" text="다음" /></div>
          </div>
        );
    }
  }
  
  render(){
      return(
          <footer>
              {this._renderFooterType(this.props.headerType)}
          </footer>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  _handleCompleteSelected: (headerType) => { dispatch(actions.completeSelected(headerType)) },
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

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
  
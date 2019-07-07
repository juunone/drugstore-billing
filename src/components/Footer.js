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
  
  _purchse = () => {
    this.props._handlePurchase();
  }

  _renderFooterType(type) {      
    switch(type){
      case 'main':          
        const PRICE_FORMATTING = this.props.totalPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
        return (
          <div className={'footer__wrapper'}>
            <div className={'total cb_clear'}>
              <span className={'total__text'}>합계</span>
              <strong className={'total__price'}>{PRICE_FORMATTING}원</strong>
            </div>
            <div><Button type="next" text="결제" click={this._purchse} totalPrice={this.props.totalPrice} /></div>
          </div>
        );
      case 'surgery':
      case 'discount':
        return (
          <div className={'footer__wrapper select'}>
            <p>{type === 'surgery' ? '서비스를 3개 이상 선택해주세요.' : '할인을 선택하세요.'}</p>
            <div>
              <Button 
                type="next complete" 
                text="완료"
                totalSelected={type === 'surgery' ? this.props.totalSelectedSurgery : undefined} 
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
            <div><Button type="next" text="결제" click={this._purchse} totalPrice={this.props.totalPrice} /></div>
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
  _handlePurchase: () => { dispatch(actions.purchase()) }
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
  
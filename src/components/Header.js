import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import Button from './Button';

class Header extends Component{
    constructor(props){
      super(props);
      this.state = {
        date: moment().format("YYYY.MM.DD HH:mm")
      }
    }

    _getHeaderItems = (headerType) => {
      this.props._handleGetHeaderItems(headerType);
    }

    _renderHeaderType(type) {      
      switch(type){
        case 'main':          
          return (
            <div className={'header__wrapper cb_clear'}>
              <div className={'userName'}>{this.props.userName}</div>
              <div className={'date'}>{this.state.date}</div>
              <Button type="surgery" text="제품" click={this._getHeaderItems} headerType="surgery" />
              <Button type="discount" text="할인" click={this._getHeaderItems} headerType="discount" />
            </div>
          );
        case 'surgery':
        case 'discount':
          return (
            <div className={'header__wrapper cb_clear br-b-n'}>
              <i onClick={(()=>{this._getHeaderItems('main')})} className={'ico'}><FontAwesomeIcon icon={faTimes} /></i> <h2>{type === 'surgery' ? '제품메뉴' : '할인'}</h2>
            </div>  
          );
        default:
          return (
            <div className={'header__wrapper cb_clear'}>
              <div className={'userName'}>{this.props.userName}</div>
              <div className={'date'}>{this.state.date}</div>
              <Button type="surgery" text="제품" click={this._getHeaderItems} headerType="surgery" />
              <Button type="discount" text="할인" click={this._getHeaderItems} headerType="discount" />
            </div>
          );
      }
    }

    render() {         
        return(
            <header>
                {this._renderHeaderType(this.props.headerType)}
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  _handleGetHeaderItems: (headerType) => { dispatch(actions.getHeaderItems(headerType)) }
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
  
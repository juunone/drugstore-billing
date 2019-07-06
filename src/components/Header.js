import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import moment from 'moment';
import Button from './Button';

class Header extends Component{
    constructor(props){
      super(props);
      this.state = {
        date: moment()
      }
    }
    render() { 
        const selectedDate = this.state.date.format("YYYY.MM.DD HH:mm");
        return(
            <header>
                <div className={'header__wrapper'}>
                    <div className={'userName'}>{this.props.userName}</div>
                    <div className={'date'}>{selectedDate}</div>
                    <Button type="surgery" text="시술" />
                    <Button type="discount" text="할인" />
                </div>
            </header>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
  
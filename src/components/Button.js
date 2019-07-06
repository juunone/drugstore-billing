import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Button extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
          <button 
            className={this.props.type} 
            onClick={this.props.click && (()=>{this.props.click(this.props.headerType)})}
            disabled={this.props.totalSelected < 3}
          >            
              {this.props.type === 'surgery' || this.props.type === 'discount' ? <FontAwesomeIcon icon={faPlus} /> : ''} {this.props.text}
          </button>
      )
  }
}
  
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Button extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
          <button className={this.props.type}>
              {this.props.type === 'surgery' || this.props.type === 'discount' ? <FontAwesomeIcon icon={faPlus} /> : ''} {this.props.text}
          </button>
      )
  }
}
  
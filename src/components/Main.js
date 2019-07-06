import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Main extends Component{
  componentDidMount() {
    this._fetchProducts();
  }

  _fetchProducts() {
    this.props._handleFetchProducts();
  }

  _renderProducts(data) {
    if (Object.keys(data).length) {
      const ITEMS = Object.keys(data.items);
      const MAKE_ARRAY = ITEMS.map(k => {
        return <div key={k}>{data.items[k].name}</div>
      })
      return MAKE_ARRAY;
    }
  }

  render(){
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    
    return(
        <main>
          {this._renderProducts(products)}
        </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    _handleFetchProducts: () => { dispatch(actions.fetchProducts()) }
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


export default connect(mapStateToProps, mapDispatchToProps)(Main);
  
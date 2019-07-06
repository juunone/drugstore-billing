import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Main extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._fetchProducts();
  }

  _fetchProducts() {
    this.props._handleFetchProducts();
  }

  _selectAction(key,type) {
    this.props._handleSelectAction(key,type);
  }

  _modifyCount(key, event) {
    const VALUE = event.target.value;
    this.props._handleModifyCount(key, VALUE);
  }

  _makeList() {
    if(this.props.selectedSurgery.length){
      const counts = (total) => {
        let arr = [];
        for(let i = 1; i <= total; i++){
          arr.push(<option key={i} value={i}>{i}</option>);
        }
        return arr;
      }
      return this.props.selectedSurgery.map((v,i) => {
        return (
          <section className={'cursor-none'} key={i} onChange={((e)=>{this._modifyCount(i,e)})} value={v.count}>
            <div className={'items__wrapper cb_clear'}>
              <div className={'name'}><h2>{v.name}</h2></div>
              <span>{v.price}원</span>              
              <select>{counts(v.totalCount)}</select>
            </div>            
          </section>
        )
      })
    }else{
      return <section className={'noItems cursor-none'}>시술을 선택해주세요.</section>
    }
  }

  _renderProducts(type) {
    const PRODUCTS = this.props.products;
    switch(type){
      case 'main':          
        return this._makeList();
      case 'surgery':      
        if (Object.keys(PRODUCTS).length) {
          const ITEMS = PRODUCTS.items;
          const MAKE_ARRAY = Object.keys(ITEMS).map(k => {
            return (
              <section className={'cb_clear'} key={k} onClick={(()=>{this._selectAction(k,type)})}>
                <div className={'items__wrapper'}>
                  <small>{ITEMS[k].category}</small>
                  <div className={'name'}><h2>{ITEMS[k].name}</h2></div>
                  <span>{ITEMS[k].price}원</span>
                  <i>{ITEMS[k].isSelected && <FontAwesomeIcon icon={faCheck} />}</i>
                </div>            
              </section>
            )
          })
          return MAKE_ARRAY;
        }else{
          return;
        }
      case 'discount':        
        if (Object.keys(PRODUCTS).length) {
          const DISCOUNTS = PRODUCTS.discounts;
          const MAKE_ARRAY = Object.keys(DISCOUNTS).map(k => {
            return (
              <section className={'cb_clear'} key={k} onClick={(()=>{this._selectAction(k,type)})}>
                <div className={'items__wrapper'}>
                  <div className={'name'}><h2>{DISCOUNTS[k].name}</h2></div>
                  <span className={'discountPercent'}>{Number(DISCOUNTS[k].rate * 100000).toFixed()}원</span>
                  <i>{DISCOUNTS[k].isSelected && <FontAwesomeIcon icon={faCheck} />}</i>
                </div>            
              </section>
            )
          })
          return MAKE_ARRAY;
        }else{
          return;
        }
      default:
        return (
          <section className={'noItems cursor-none'}>시술을 선택해주세요.</section>
        );
    }    
  }

  render(){
    if (this.props.error) {
      return <main><section className={'noItems'}>Error! {this.props.error.message}</section></main>;      
    }

    if (this.props.loading) {
      return <main><section className={'noItems'}>Loading...</section></main>;
    }
    
    return(
        <main>
          {this._renderProducts(this.props.headerType)}
        </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    _handleFetchProducts: () => { dispatch(actions.fetchProducts()) },
    _handleSelectAction: (key,type) => { dispatch(actions.selectAction(key,type)) },
    _handleModifyCount: (key,val) => { dispatch(actions.modifyCount(key,val)) }
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
  
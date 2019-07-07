import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Button from './Button';

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

  _removeSelectedSurgery(key) {
    confirmAlert({
      title: '정말 삭제하시겠습니까?',
      message: '',
      closeOnEscape: true,
      closeOnClickOutside: true,
      buttons: [
        {
          label: 'YES',
          onClick: () => this.props._handleRemoveSelectedSurgery(key)
        },
        {
          label: 'NO'
        }
      ]
    });
  }

  _modifySelectedDiscount(v,i) {
    const makeDatalist = () => {
      return this.props.selectedSurgery.map((v,i) => {
        if(v.isDiscount === false) return <option key={i} value={v.name}>{v.price}</option>;        
      });
    }
    confirmAlert({
      closeOnEscape: true,
      closeOnClickOutside: true,
      customUI: ({ onClose }) => {
        return (
          <section className={'discount__targetList'}>
            <h2>{v.name}</h2>
            <input placeholder={'검색'} list="discountTargetSurgeries" />
            <datalist id="discountTargetSurgeries">
              {makeDatalist()}
            </datalist>
            <div>
              {<Button type="surgery p-h-3" text="삭제" />}
              {<Button type="discount p-h-3" text="적용" />}
            </div>
          </section>
        )
      }      
    });
  }

  _makeList() {
    let results = [];
    if(this.props.selectedSurgery.length){
      const counts = (total) => {
        let arr = [];
        for(let i = 1; i <= total; i++){
          arr.push(<option key={i} value={i}>{i}</option>);
        }
        return arr;
      }
      const SURGERY = this.props.selectedSurgery.map((v,i) => {
        const PRICE_FORMATTING = v.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
        return (
          <section className={'cursor-none'} key={i}>
            <div className={'items__wrapper cb_clear'}>
              <div className={'name'}><h2>{v.name}</h2></div>
              <span>{PRICE_FORMATTING}원</span>              
              <div className={'items__wrapper__surgery--buttons cb_clear'}>
                <select onChange={((e)=>{this._modifyCount(i,e)})} value={v.count}>{counts(v.totalCount)}</select>
                <button className={'delete-surgery'} onClick={(()=>{this._removeSelectedSurgery(i)})}>삭제</button>
              </div>
            </div>            
          </section>
        )
      })
      results.push(SURGERY);
    }

    if(this.props.selectedDiscount.length){
      const DISCOUNT = this.props.selectedDiscount.map((v,i) => {
        const PRICE = Number(v.rate * 100000).toFixed();
        const RATE = Number(v.rate * 100).toFixed();
        const PRICE_FORMATTING = Number(PRICE).toLocaleString(navigator.language, { minimumFractionDigits: 0 });
        return (
          <section className={'cursor-none'} key={i}>
            <div className={'items__wrapper cb_clear'}>
              <div className={'name'}><h2>{v.name}</h2></div>
              <span className={'discountPercent'}>-{PRICE_FORMATTING}원({RATE}%)</span>              
              <div className={'items__wrapper__surgery--buttons cb_clear'}>
                <button className={'modify-discount'} onClick={(()=>{this._modifySelectedDiscount(v,i)})}>수정</button>
              </div>
            </div>            
          </section>
        )
      })
      results.push(DISCOUNT);
    }

    return results;
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
            const PRICE_FORMATTING = ITEMS[k].price.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
            return (
              <section className={'cb_clear'} key={k} onClick={(()=>{this._selectAction(k,type)})}>
                <div className={'items__wrapper'}>
                  <small>{ITEMS[k].category}</small>
                  <div className={'name'}><h2>{ITEMS[k].name}</h2></div>
                  <span>{PRICE_FORMATTING}원</span>
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
            const RATE = Number(DISCOUNTS[k].rate * 100).toFixed();
            return (
              <section className={'cb_clear'} key={k} onClick={(()=>{this._selectAction(k,type)})}>
                <div className={'items__wrapper'}>
                  <div className={'name'}><h2>{DISCOUNTS[k].name}</h2></div>
                  <span className={'discountPercent'}>{RATE}% 할인</span>              
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
      return <main><section className={'noItems'}>Loading...<FontAwesomeIcon icon={faSpinner} spin={true} /></section></main>;
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
    _handleModifyCount: (key,val) => { dispatch(actions.modifyCount(key,val)) },
    _handleRemoveSelectedSurgery: (key) => { dispatch(actions.removeSelectedSurgery(key)) }
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
  
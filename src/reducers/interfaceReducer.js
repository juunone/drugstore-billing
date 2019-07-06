import {
  HEADER_TYPE,
  SELECT_ACTION,
  COMPLETE_SELECTED,
  MODIFY_COUNT,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/ActionTypes';

const intialState = {
  products: {},
  loading: false,
  error: null,
  userName:'최준원',
  totalPrice:0,
  headerType:'main',
  totalSelectedSurgery:0,
  totalSelectedDiscount:0,
  selectedSurgery:[],
  selectedDiscount:[]
};

const COPY = (obj) => {
  if (obj !== undefined && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }

  return null;
}

export default (state = intialState, action) => { 
    switch (action.type) {
      case HEADER_TYPE:        
        return {
          ...state,
          headerType: action.headerType,
        };
      case SELECT_ACTION:        
        const SELECT_STATE = COPY(state);

        if(action.actionType === 'surgery'){
          SELECT_STATE.products.items[action.key].isSelected = !SELECT_STATE.products.items[action.key].isSelected;
          const totalSelected = Object.keys(SELECT_STATE.products.items).filter(v => SELECT_STATE.products.items[v].isSelected);
          if(totalSelected.length) SELECT_STATE.totalSelectedSurgery = totalSelected.length;
          else SELECT_STATE.totalSelectedSurgery = 0;
        }else if(action.actionType === 'discount'){
          SELECT_STATE.products.discounts[action.key].isSelected = !SELECT_STATE.products.discounts[action.key].isSelected;
          const totalSelected = Object.keys(SELECT_STATE.products.discounts).filter(v => SELECT_STATE.products.discounts[v].isSelected);
          if(totalSelected.length) SELECT_STATE.totalSelectedDiscount = totalSelected.length;
          else SELECT_STATE.totalSelectedDiscount = 0;
        }

        return SELECT_STATE;
      case COMPLETE_SELECTED:
        const COMPLETE_STATE = COPY(state);
        if(action.headerType === 'surgery'){          
          const totalSurgeryComplete = Object.keys(COMPLETE_STATE.products.items).reduce((results, v) => {
            if(COMPLETE_STATE.products.items[v].isSelected) results.push(COMPLETE_STATE.products.items[v]);
            return results;
          }, []);

          if(totalSurgeryComplete.length) COMPLETE_STATE.selectedSurgery = totalSurgeryComplete;          
        }else if(action.headerType === 'discount'){
          const totalDiscountComplete = Object.keys(COMPLETE_STATE.products.discounts).reduce((results, v) => {
            if(COMPLETE_STATE.products.discounts[v].isSelected) results.push(COMPLETE_STATE.products.discounts[v]);
            return results;
          }, []);

          if(totalDiscountComplete.length) COMPLETE_STATE.selectedDiscount = totalDiscountComplete;
        }

        COMPLETE_STATE.headerType = 'main';

        return COMPLETE_STATE;
      case MODIFY_COUNT:        
      const COUNT_STATE = COPY(state);
      COUNT_STATE.selectedSurgery[action.key].count = Number(action.val);
        return COUNT_STATE;
      case FETCH_PRODUCTS_START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_PRODUCTS_SUCCESS:        
        const ITEMS = action.payload.products.items;
        const DISCOUNTS = action.payload.products.discounts;
        if(Object.keys(ITEMS).length){
          Object.keys(ITEMS).map(v => {
            ITEMS[v].isSelected = false;
            ITEMS[v].totalCount = 10;
                        
            if(ITEMS[v].name.indexOf('컷') !== -1){
              ITEMS[v].category = '커트';
            }else if(ITEMS[v].name.indexOf('드라이') !== -1){
              ITEMS[v].category = '드라이';
            }else if(ITEMS[v].name.indexOf('펌') !== -1){
              ITEMS[v].category = '펌';
            }else{
              ITEMS[v].category = '기타';
            }

            return ITEMS;
          });
        }

        if(Object.keys(DISCOUNTS).length){
          Object.keys(DISCOUNTS).map(v => {
            DISCOUNTS[v].isSelected = false;

            return DISCOUNTS;
          });
        }

        return {
          ...state,
          loading: false,
          products: action.payload.products
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: String(action.payload.error),
          products: []
        };
      default:
        return state;
    }
  }
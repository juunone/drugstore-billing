import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/ActionTypes';

const intialState = {
  is_next:false,
  products: {},
  loading: false,
  error: null,
  userName:'최준원',
  totalPrice:0
};

const COPY = (obj) => {
  if (obj !== undefined && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }

  return null;
}

export default (state = intialState, action) => { 
    switch (action.type) {
      case 'NEXT':
        let nextState = COPY(state);
        nextState.is_next = !action.is_next;
        return nextState;
      case FETCH_PRODUCTS_START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_PRODUCTS_SUCCESS:
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
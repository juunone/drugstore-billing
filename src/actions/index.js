import * as types from './ActionTypes'

export const selectNext = (is_next) => {
  return{
    type:types.NEXT,
    is_next: is_next
  }
}

export const fetchProductsStart = () => {
  return{
    type: types.FETCH_PRODUCTS_START
  }
};

export const fetchProductsSuccess = products => {
  return{
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  }
};

export const fetchProductsFailure = error => {
  return{
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: { error }
  }
};

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsStart());
    return fetch("/requestAssignmentCalculatorData")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
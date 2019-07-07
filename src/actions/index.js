import * as types from './ActionTypes'

export const getHeaderItems = (headerType) => {
  return{
    type:types.HEADER_TYPE,
    headerType: headerType
  }
}

export const selectAction = (key,actionType) => {
  return{
    type:types.SELECT_ACTION,
    key: key,
    actionType: actionType
  }
}

export const completeSelected = (headerType) => {
  return{
    type:types.COMPLETE_SELECTED,
    headerType: headerType
  }
}

export const modifyCount = (key,val) => {
  return{
    type:types.MODIFY_COUNT,
    key: key,
    val:val
  }
}

export const removeSelectedSurgery = (key) => {
  return{
    type:types.REMOVE_SELECTED_SURGERY,
    key: key
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
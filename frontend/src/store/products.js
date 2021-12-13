const ADD_PRODUCTS = 'products/ADD_PRODUCTS';

const addProducts = (payload) => {
  return {
    type: ADD_PRODUCTS,
    payload,
  }
};

export const getAllProducts = () => async (dispatch) => {
  const res = await fetch('/api/products');
  const data = await res.json();
  if (res.ok) dispatch(addProducts(data.products));
};

const productReducer = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case ADD_PRODUCTS:
      action.payload.forEach(product => {
        newState[product.id] = product;
      });
      return newState;
    default:
      return state;
  }
};

export default productReducer;
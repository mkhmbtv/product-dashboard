const ADD_PRODUCTS = 'products/ADD_PRODUCTS';
const ADD_ONE_PRODUCT = 'products/ADD_ONE_PRODUCT';
const REMOVE_ONE_PRODUCT = 'products/REMOVE_ONE_PRODUCT';

const addProducts = (payload) => {
  return {
    type: ADD_PRODUCTS,
    payload,
  }
};

const addOneProduct = (payload) => {
  return {
    type: ADD_ONE_PRODUCT,
    payload
  }
};

const removeProduct = (id) => {
  return {
    type: REMOVE_ONE_PRODUCT,
    id
  }
}


export const getAllProducts = () => async (dispatch) => {
  const res = await fetch('/api/products');
  const data = await res.json();
  if (res.ok) dispatch(addProducts(data.products));
};

export const addProduct = (product) => async (dispatch) => {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  
  if (res.ok) {
    const data = await res.json();
    console.log('data', data);
    dispatch(addOneProduct(data.product));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });

  if (res.ok) dispatch(removeProduct(id));
};

const productReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case ADD_PRODUCTS:
      action.payload.forEach(product => {
        newState[product.id] = product;
      });
      return newState;
    case ADD_ONE_PRODUCT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_ONE_PRODUCT:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default productReducer;
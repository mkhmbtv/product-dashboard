const ADD_PRODUCTS = 'products/ADD_PRODUCTS';
const ADD_ONE_PRODUCT = 'products/ADD_ONE_PRODUCT';

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
    default:
      return state;
  }
};

export default productReducer;
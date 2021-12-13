import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateProduct } from '../../store/products';

const UpdateProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product[id]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...product,
      image,
      name,
      price,
    };
    dispatch(updateProduct(payload));
    history.push('/');
  }

  return (
    <div className='add-product'>
      <h3>Update A Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder='Image Url'
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Product Name'
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder='Price'
        />
        <button className='submit-button' type='submit'>
          Update Product
        </button>
      </form>
    </div>
  );
};
export default UpdateProduct;

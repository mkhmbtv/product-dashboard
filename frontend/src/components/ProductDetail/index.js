import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProduct } from "../../store/products";

const ProductDetail = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className='product-detail'>
      <img src={image} alt={name} />
      <span className='product-title'>{name}</span>
      <span>${price}</span>
      <div className='button-row'>
        <button 
          className='delete-button' 
          onClick={() => dispatch(deleteProduct(id))}
        >
          Delete
        </button>
        <button 
          className='update-button'
          onClick={() => history.push(`/products/${id}/edit`)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

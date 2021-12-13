const ProductDetail = ({ id, image, name, price }) => {
  return (
    <div className='product-detail'>
      <img src={image} alt={name} />
      <span className='product-title'>{name}</span>
      <span>${price}</span>
      <div className='button-row'>
        <button className='delete-button'>Delete</button>
        <button className='update-button'>Update</button>
      </div>
    </div>
  );
};
export default ProductDetail;

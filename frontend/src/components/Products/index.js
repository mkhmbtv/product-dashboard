import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/products";
import ProductDetail from '../ProductDetail';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.product));
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className='products'>
        {products?.map(({ id, image, name, price }) => (
          <ProductDetail
            key={id}
            id={id}
            image={image}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

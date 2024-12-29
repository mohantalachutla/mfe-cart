import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from '../../components/base/Container';
import Button from '../../components/base/Button';
import { Product } from '../../components/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { checkoutCartAction, fetchCartAction } from '../../actions';
const CartPage = ({ products = [], archivedItems = [] } = props) => {
  const productList = useSelector((state) => state.cart.items ?? products);
  const archivedItemList = useSelector(
    (state) => state.cart.archivedItems ?? archivedItems
  );
  const dispatch = useDispatch();
  const handleCartEmpty = (event) => {
    event.preventDefault();
    // navigate('/cart');
  };
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchCartAction());
    }
  }, [dispatch]);
  return (
    <Container size="md" className="m-4">
      {productList.length === 0 && (
        <div className="alert alert-info" role="alert">
          Cart is empty. Click{' '}
          <a
            href="#"
            className="no-underline text-xl font-bold"
            onClick={handleCartEmpty}
          >
            here
          </a>{' '}
          to shop now.
        </div>
      )}
      {productList.length > 0 && (
        <div className="w-full flex items-center justify-around gap-x-4">
          <Button
            onClick={() => {
              dispatch(
                checkoutCartAction({
                  items: [_id],
                  address: 'Some address',
                })
              );
            }}
          >
            Checkout
          </Button>
          <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
            ${productList.reduce((a, b) => a + _.toNumber(b.price), 0)}
          </div>
        </div>
      )}
      {productList.map((product, index) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <Product key={product._id + index} {...product} />
      ))}
      {productList.length > 0 && (
        <div className="w-full flex items-center justify-around gap-x-4">
          <Button
            onClick={() => {
              dispatch(
                checkoutCartAction({
                  items: productList.map((product) => product._id),
                  address: 'Some address',
                })
              );
            }}
          >
            Checkout
          </Button>
        </div>
      )}
      {archivedItemList.length > 0 && (
        <div className="w-full flex items-center justify-around gap-x-4">
          <h4> Saved for Later</h4>
          {archivedItemList.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      )}
    </Container>
  );
};
export default withStoreWrapper(CartPage);

CartPage.propTypes = {
  products: PropTypes.array,
};

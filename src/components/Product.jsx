import React from 'react';
import PropTypes from 'prop-types';
import Card from './base/Card';
export function Product({ name, _id, price, image, description }) {
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      key={_id}
      style={{ width: '100%' }}
    >
      <Card className="relative w-full" imgAlt={name} imgSrc={image}>
        <div className="w-full flex flex-col justify-between gap-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6 className="text-base font-monos tracking-tight text-gray-900 dark:text-white">
            {name}
          </h6>
          <div className="w-full flex items-center justify-around gap-x-4">
            <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Product;

Product.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

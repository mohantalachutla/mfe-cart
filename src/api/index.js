import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};

export const getCart = () => {
  return httpClient.get('/api/cart');
};

export const checkoutCart = ({ items, address }) => {
  return httpClient.post('/api/order', { items, address });
};

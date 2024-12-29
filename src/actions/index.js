import { createAction } from '@reduxjs/toolkit';

export const helloAction = createAction('hello/request', (payload) => ({
  payload,
}));

export const fetchCartAction = createAction(
  'cart/fetchCart/request',
  (payload) => ({
    payload,
  })
);

export const checkoutCartAction = createAction(
  'cart/checkoutCart/request',
  (payload) => ({
    payload,
  })
);

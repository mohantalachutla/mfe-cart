import helloReducer from './hello';
import loaderReducer from './loader';
import modalReducer from './modal';
import authReducer from './auth';
import cartReducer from './cart';

export default {
  hello: helloReducer,
  loader: loaderReducer,
  modal: modalReducer,
  auth: authReducer,
  cart: cartReducer,
};

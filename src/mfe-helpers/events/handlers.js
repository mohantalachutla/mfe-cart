import { registry } from '@mohantalachutla/mfe-utils';
import actions from './actions';
export const _consumes = {
  HOST_MFE_CART_ACKNOWLEDGE: ({ name }) => {
    console.log('Mfe Cart Acknowledged Host', name);
    actions.dispatchDone({ name });
  },
};

registry.registerAll({
  ..._consumes,
});

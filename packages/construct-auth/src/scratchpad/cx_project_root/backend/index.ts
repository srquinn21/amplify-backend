import { auth } from './auth.js';
import { data } from './data.js';
import {
  AmplifyCompose,
  AmplifyCustom,
} from '../../aws_amplify_backend/base_types.js';
import { preSignUpHandler } from './functions.js';
import { fileStorage } from './storage.js';

export const config = {
  auth,
  data,
};

// uncomment to compose resources together

// export const compose: AmplifyCompose<typeof config> = (features) => {
//   // compose resources together here
// };

// uncomment to add custom resources

// export const custom: AmplifyCustom<typeof config> = (
//   featureResources,
//   scope
// ) => {
//   // create custom resources here and integrate with amplify resources
// };

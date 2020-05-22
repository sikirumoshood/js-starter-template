import development from './environment/development';
import test from './environment/test';
import production from './environment/production';

const defaults = {
  auth: {
    issuer: 'Roadry',
    subject: 'LoginToken',
    expiresIn: '720h' // days
  },
  paginationLimit: 50,
  initialization_vector_length: 16,
  passwordResetTokenExpiresIn: 24 // hrs
};

// Return configuration based on current environment
const ENV = process.env.NODE_ENV || 'development';

// eslint-disable-next-line
let ENV_CONFIG = {};

// Add environment specific config to the defaults above
switch (ENV) {
  case 'development':
    ENV_CONFIG = Object.assign(defaults, development);
    break;
  case 'production':
    ENV_CONFIG = Object.assign(defaults, production);
    break;
  case 'test':
    ENV_CONFIG = Object.assign(defaults, test);
    break;
  default: break;
}

export default ENV_CONFIG;

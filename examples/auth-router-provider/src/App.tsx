import { Auth0 } from '@auth0/auth0-js';
const auth0 = new Auth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'openid profile email'
});
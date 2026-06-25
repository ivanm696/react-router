import { Auth0 } from '@auth0/auth0-js';
const auth0 = new Auth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://api.example.com',
  scope: 'openid profile email'
});
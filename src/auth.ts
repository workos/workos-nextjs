import { getAuthorizationUrl } from './get-authorization-url.js';
import { cookies } from 'next/headers';
import { cookieName } from './cookie.js';
import { terminateSession } from './session.js';

async function getSignInUrl(redirectUri: string = '') {
  return getAuthorizationUrl({ screenHint: 'sign-in', redirectUri });
}

async function getSignUpUrl(redirectUri: string = '') {
  return getAuthorizationUrl({ screenHint: 'sign-up', redirectUri });
}

async function signOut() {
  cookies().delete(cookieName);
  await terminateSession();
}

export { getSignInUrl, getSignUpUrl, signOut };

import { User } from '@workos-inc/node';

export interface HandleAuthOptions {
  returnPathname?: string;
}

export interface Impersonator {
  email: string;
  reason: string | null;
}
export interface Session {
  accessToken: string;
  refreshToken: string;
  user: User;
  impersonator?: Impersonator;
}

export interface UserInfo {
  user: User;
  sessionId: string;
  organizationId?: string;
  role?: string;
  permissions?: string[];
  impersonator?: Impersonator;
  accessToken: string;
  hasPermission: (permission: string) => boolean;
}
export interface NoUserInfo {
  user: null;
  sessionId?: undefined;
  organizationId?: undefined;
  role?: undefined;
  impersonator?: undefined;
  accessToken?: undefined;
}

export interface AccessToken {
  sid: string;
  org_id?: string;
  role?: string;
  permissions?: string[];
}

export interface GetAuthURLOptions {
  screenHint?: 'sign-up' | 'sign-in';
  returnPathname?: string;
}

export interface AuthkitMiddlewareAuth {
  enabled: boolean;
  unauthenticatedPaths: string[];
}

export interface AuthkitMiddlewareOptions {
  debug?: boolean;
  middlewareAuth?: AuthkitMiddlewareAuth;
}

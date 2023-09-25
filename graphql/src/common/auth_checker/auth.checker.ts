import { AuthChecker, UnauthorizedError, ForbiddenError } from 'type-graphql';

import { GraphReqCtx } from '../../interface';

export const authChecker: AuthChecker<GraphReqCtx> = (
  { context: { user } },
  roles,
) => {
  if (roles.length === 0) {
    if (user !== undefined) {
      return true;
    }
  }

  if (!user) {
    throw new UnauthorizedError();
  }

  if (!roles.includes(user.role)) {
    throw new ForbiddenError();
  }

  return true;
};

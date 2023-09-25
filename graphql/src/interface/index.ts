import { PrismaClient } from '@prisma/client';

export interface Employee {
  clientId: string;
  roles: string[];
  isOwner: boolean;
}
export interface User {
  id: string;
  email: string;
  username: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'EMPLOYEE' | 'OWNER';
  iss?: string;
  sub?: string;
  aud?: string;
  iat?: number;
  employee?: Employee;
}

export interface GraphReqCtx {
  prisma: PrismaClient;
  user?: User;
}

// import { customResolvers } from './custom';
import { generateResolvers } from './generated';

export * from './reference';

export const orphansTypes = [];

console.info(`generateResolvers`, generateResolvers);

export const resolvers = [
  ...generateResolvers,
  //   ...customResolvers,
] as unknown as any;

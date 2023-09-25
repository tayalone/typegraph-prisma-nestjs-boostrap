import { resolvers as generatedResolverImport } from 'prisma/generated/type-graphql';

let generateResolvers = null;

if (process.env.EXPOSE_ALL_RESOLVERS || true) {
  generateResolvers = Object.values(generatedResolverImport) as unknown as any;
} else {
  // / filter resolvers from 'prisma/generated/type-graphql'

  generateResolvers = Object.values(generatedResolverImport) as unknown as any;
}

console.info(`generateResolvers`, generateResolvers);

export { generateResolvers };

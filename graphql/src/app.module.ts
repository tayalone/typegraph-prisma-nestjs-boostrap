import 'reflect-metadata';
import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as path from 'path';

// / Internal export
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import configuration from './config/configuration';
import { RedisConfigService } from './redis_config/redis_config.service';
import { HealthModule } from './health/health.module';
import { PrismaService } from './common/prisma/prisma.service';
import { GraphReqCtx } from './interface';
import { authChecker } from './common/auth_checker/auth.checker';
import { resolvers } from './resolvers';

const logFormat =
  process.env.NODE_ENV == 'production'
    ? winston.format.json()
    : winston.format.prettyPrint();

const logLevel = process.env.LOG_LEVEL || 'debug';

console.info(`resolvers xxx`, resolvers);
@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: logLevel,
          format: winston.format.combine(
            winston.format.timestamp(),
            logFormat,
            // nestWinstonModuleUtilities.format.nestLike(), // <-- for nest log like
          ),
        }),
      ],
    }),
    RedisModule.forRootAsync(
      {
        useClass: RedisConfigService,
      },
      true,
    ),
    TypeGraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [PrismaModule],
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) => ({
        validate: false,
        skipCheck: true,
        cors: true,
        debug: false,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        dateScalarMode: 'isoDate',
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        context: (): GraphReqCtx => ({
          prisma,
        }),

        // scalarsMap: [{ type: Date, scala }],
        authChecker,

        // resolvers,
        // autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
        // context: (): Context => ({ prisma }),
        // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...resolvers],
})
export class AppModule {}

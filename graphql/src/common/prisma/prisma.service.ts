import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '.prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['info', 'warn', 'error'],
      errorFormat: 'minimal',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

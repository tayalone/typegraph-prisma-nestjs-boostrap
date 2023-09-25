import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { RedisHealthModule } from '@liaoliaots/nestjs-redis-health';
import { PrismaModule } from '../common/prisma/prisma.module';
import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, RedisHealthModule, PrismaModule],
  controllers: [HealthController],
})
export class HealthModule {}

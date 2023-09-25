import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import {
  HealthCheckService,
  HealthCheck,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { RedisHealthIndicator } from '@liaoliaots/nestjs-redis-health';
import { PrismaService } from '../common/prisma/prisma.service';
import Redis from 'ioredis';

@Controller('health')
export class HealthController {
  private readonly redis: Redis;

  constructor(
    private configService: ConfigService,
    private health: HealthCheckService, // private http: HttpHealthIndicator,
    private readonly redisIndicator: RedisHealthIndicator,
    private prismaHealth: PrismaHealthIndicator,
    private prisma: PrismaService,
  ) {
    const redisConf = this.configService.get('redis');

    this.redis = new Redis({
      host: redisConf.host,
      port: redisConf.port,
      password: redisConf.password,
    });
  }

  @Get('liveness')
  @HealthCheck()
  readiness() {
    return this.health.check([
      //   () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
  @Get('readiness')
  @HealthCheck()
  liveness() {
    return this.health.check([
      //   () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () =>
        this.redisIndicator.checkHealth('redis', {
          type: 'redis',
          client: this.redis,
          timeout: 500,
        }),
      async () => this.prismaHealth.pingCheck('prisma', this.prisma),
    ]);
  }
}

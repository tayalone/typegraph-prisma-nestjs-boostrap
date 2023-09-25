import { Module } from '@nestjs/common';
import { RedisConfigService } from './redis_config.service';

@Module({
  providers: [RedisConfigService],
})
export class RedisConfigModule {}

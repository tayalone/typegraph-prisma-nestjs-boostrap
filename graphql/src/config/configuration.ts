interface IConfig {
  port: number;
  nodeEnv: string;
  logLevel: string;

  postgres: {
    url: string;
  };
  redis: {
    username: string;
    password: string;
    port: number;
    host: string;
  };
}

export default (): IConfig => ({
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'debug',

  postgres: {
    url:
      process.env.POSTGRES_URL ||
      'postgres://postgres:postgres@localhost:5432/postgres',
  },
  redis: {
    username: process.env.REDIS_USERNAME || 'redis',
    password: process.env.REDIS_PASSWORD || 'redis',
    port:
      (process.env.REDIS_PORT && parseInt(process.env.REDIS_PORT, 10)) || 17294,
    host: process.env.REDIS_HOST || 'localhost',
  },
});

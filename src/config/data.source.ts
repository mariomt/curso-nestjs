import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV?.trim()}.env`,
});

const config = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: config.get('DATABASE_HOST'),
  port: config.get('DATABASE_PORT'),
  username: config.get('DATABASE_USER'),
  password: config.get('DATABASE_PASS'),
  database: config.get('DATABASE_DBNAME'),
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
  synchronize: false,
};

export const AppDS = new DataSource(DataSourceConfig);

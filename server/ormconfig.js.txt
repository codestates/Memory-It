require('dotenv').config()

module.exports = {
  type: 'mysql',
  host: process.env.RDS_DATABASE_HOST,
  port: process.env.RDS_DATABASE_PORT,
  username: process.env.RDS_DATABASE_USER,
  password: process.env.RDS_DATABASE_PASSWORD,
  database: 'memoryit',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
}

// @ts-check
/**
 * @typedef {import('@strapi/strapi').DatabaseConfig} DatabaseConfig
 */

/** @type {DatabaseConfig} */
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
    },
    pool: {
      min: 0,
    },
    acquireConnectionTimeout: 1000000,
    useNullAsDefault: true,
  },
});
export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    synchronize: process.env.DB_SYNCHRONIZE || true,
  },
});

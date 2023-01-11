module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceurarp4reb3j7116avg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'solve'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '1lAtkMACw25QVwWJHUFJHIJDWLlWFvCd'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

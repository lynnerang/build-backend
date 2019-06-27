module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/star_data',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};

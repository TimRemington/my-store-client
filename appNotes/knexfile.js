module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/timremington'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

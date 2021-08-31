import { Pool } from "pg";
import path from "path";

const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve('config.json'))[env];

const database = new Pool({
  user: config.user ??'dbuser',
  host: config.host ??'database.server.com',
  database: config.database ??'mydb',
  password: config.password ??'secretpassword',
  port: config.port??5432
});

export default database;
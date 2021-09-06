import { Pool, PoolConfig } from "pg";
import path from "path";

const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve('config.json'))[env];

export default (startup: boolean = false): Pool => {
  let connection: PoolConfig = {
    user: config ? config.user : 'postgres',
    host: config ? config.host : 'goomerrango-db',
    database: startup ? 'postgres' : 'goomer',
    password: config ? config.password : 'postgres',
    port: config ? config.port : '5432'
  }
  
  return new Pool(connection);
}
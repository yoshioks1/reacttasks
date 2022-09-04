import { createPool } from 'mysql2/promise'
/*
export const pool = createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'faztpassword',
    database: 'tasksdb'
})
*/
export const pool = createPool({
    host: 'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'cf4jbcqz12pp7jud',
    password: 'wsb7iy0ohet7zxsn',
    database: 'o5jdsg9yueda3hwk'
})
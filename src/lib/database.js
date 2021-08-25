import sqlite from 'better-sqlite3'

const DB = new sqlite('./annadb.sqlite');

const schema = `CREATE TABLE IF NOT EXISTS posts(
    id INTEGER NOT NULL PRIMARY KEY, 
    title TEXT NOT NULL 
)`;

DB.exec(schema);

export default DB;

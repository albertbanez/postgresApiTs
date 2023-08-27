import { Pool } from 'pg';
import 'dotenv/config'

export const pool = new Pool({
    user: 'postgres',
    host: 'host.docker.internal',
    password: process.env.DB_KEY,
    database: 'postgres',
    port: 5432
});
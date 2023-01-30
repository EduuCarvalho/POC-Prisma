import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const {Pool} = pg;

const connectionDB = new Pool({
    connectionString:`postgresql://postgres:123456gm@localhost:5432/POC_filmes_typescript?schema=public`
 
})

export default connectionDB;
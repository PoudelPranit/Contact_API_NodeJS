import {createPool} from "mysql2/promise";
import {config} from "dotenv";
import fs from 'fs';

config();

const pool = createPool({

    //credentials for mysql azure
    database: process.env.A_MYSQL_DATABASE_NAME,
    host: process.env.A_MYSQL_HOST,
    user: process.env.A_MYSQL_USER,
    port: process.env.A_MYSQL_PORT, 
    password: process.env.A_MYSQL_PASSWORD,
    ssl: {
        ca: fs.readFileSync(process.env.CERT)
      }
    // coonection string for docker sql connection
    // database: process.env.A_MYSQL_DATABASE_NAME,
    // host: process.env.A_MYSQL_HOST,
    // user: process.env.A_MYSQL_USER,
    // port: process.env.A_MYSQL_PORT, 
    // password: process.env.A_MYSQL_PASSWORD,
    
});

const  connectToDatabase =async()=> {
    try {
        await pool.getConnection();
        console.log("database connection successful");
    } catch (error) {
        console.log("database connection failed");
        console.log(error);
        throw error;
    }
}
// reference connection string
// const  connectToDatabase =async()=> {
//     try {
//         await pool.getConnection();
//         console.log("database connection successful");
//     } catch (error) {
//         console.log("database connection failed");
//         console.log(error);
//         throw error;
//     }
// }

export {connectToDatabase,pool};




import { pool ,connectToDatabase} from "./database.js";

export const find = async() => {
    const QUERY = "select * from contacts;";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result;
        
    } catch (error) {
        console.log("error occured with query");
        console.log(error);
        throw error;
    }
};

export const findById = async(id) => {
    const QUERY = "select * from contacts where contactId = ?;";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id]);
        return result[0];
    } catch (error) {
        console.log("error occured with query");
        console.log(error);
        throw error;
    }
};

export const create = async(contactId, name , number, email, message) => {
    const QUERY = `INSERT INTO contacts VALUES (?,?,?,?,?)`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[contactId, name, number, email,message]);
        console.log(result);       
        return result;
    } catch (error) {
        console.log("error occured with query");
        console.log(error);
        throw error;
    }
};


export const update = async(contactId, name , number, email, message) => {
    const QUERY = `Update contacts set name = ?, number = ?, email = ?, message =? where contactId = ?;`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[ name, number, email,message, contactId]);
        console.log(result);
        return result;
    } catch (error) {
        console.log("error occured with query");
        console.log(error);
        throw error;
    }
};



import { pool } from "../connection.js"


const get = async (req, response) => {
    try {
        const result = await pool.query('SELECT transaction_id, transaction_description, transaction_date, transaction_value FROM budget_db.transaction_table');
        response.json({ data: result[0], message: "transacciones actuales", error: false})
    } catch (e) {
        response.json({ data: [], message:e.message, error: true})
    }
}
const getById = async (req, response) => {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT transaction_id, transaction_description, transaction_date, transaction_value FROM budget_db.transaction_table WHERE transaction_id = ?', [id]);
        response.json({ data: result[0], message: "transacciones actuales", error: false})
    } catch (e) {
        response.json({ data: [], message:e.message, error: true})
    }
}
const post = async (req, response) => {
    try {
        const data = req.body.map(transaction => ([transaction.description,  transaction.date, transaction.ammount]));
        const result = await pool.query('INSERT into budget_db.transaction_table (transaction_description, transaction_date, transaction_value) VALUES ?', [data]);
        response.json({ data: result[0], message: "transacciones actuales", error: false})
    } catch (e) {
        response.json({ data: [], message:e.message, error: true})
    }
}

export const transactionController = {
    get,
    getById,
    post
}
import { getConnection } from "./../database/database";

// Get users
const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(" SELECT * FROM users");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUsersById = async (req, res) => {
    try {
        console.log(req.params);
        const { username } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE username = ?", username);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export const methods = {
    getUsers,
    getUsersById
}
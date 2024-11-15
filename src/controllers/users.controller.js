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

export const methods = {
    getUsers
}
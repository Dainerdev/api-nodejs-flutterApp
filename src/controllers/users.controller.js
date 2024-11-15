import { getConnection } from "./../database/database";

// Get Users
const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(" SELECT * FROM users");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//Get Users By Id
const getUsersById = async (req, res) => {
    try {
        const { username } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE username = ?", username);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add users
const addUsers = async (req, res) => {
    try {
        const { username, email, password, names, lastNames, country, city } = req.body;

        //validation
        if (username === undefined || email === undefined || password === undefined ||
            names === undefined || lastNames === undefined || country === undefined || city === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const user = { username, email, password, names, lastNames, country, city };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO users SET ?", user);
        res.json({ message: "User added." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getUsers,
    getUsersById,
    addUsers
}
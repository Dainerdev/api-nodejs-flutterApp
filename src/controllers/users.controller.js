import { getConnection } from "./../database/database";

// GET Users
const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(" SELECT * FROM users");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Users By Id
const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// POST users
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

// UPDATE users
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { username, email, password, names, lastNames, country, city } = req.body;

        // Validation
        if (email === undefined || password === undefined || names === undefined || 
            lastNames === undefined || country === undefined || city === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const user = { id, username, email, password, names, lastNames, country, city };

        const connection = await getConnection();
        const result = await connection.query("UPDATE users SET ? WHERE id = ?",[user, id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getUsers,
    getUsersById,
    addUsers,
    updateUser
}
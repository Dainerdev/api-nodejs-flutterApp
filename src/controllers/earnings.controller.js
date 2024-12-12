import { getConnection } from "./../database/database";

// GET Earnings
const getEarnings = async (req, res) => {
    try {
        const { user_id } = req.params; 

        const connection = await getConnection();
        const result = await connection.query(" SELECT * FROM earnings WHERE user_id = ?", user_id);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Earning By Id
const getEarningById = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM earnings WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Earning By Name
const getEarningByName = async (req, res) => {
    try {
        const { user_id, name } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM earnings WHERE user_id = ? AND name = ?", [user_id, name]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Total Earnings
const getTotalEarnings = async (req, res) => {
    try {
        const { user_id } = req.params; 

        const connection = await getConnection();
        const result = await connection.query(" SELECT SUM(amount) as total_earnings FROM earnings WHERE user_id = ?", user_id);
        res.json(result[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// POST Earning
const addEarning = async (req, res) => {
    try {
        const { user_id, name, amount, description } = req.body;

        //validation
        if ( user_id === undefined || name === undefined || amount === undefined ) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const earning = { user_id, name, amount, description };

        console.log(earning);

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO earnings SET ?", earning);
        res.json({ message: "Earning added." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// UPDATE Earning
const updateEarning = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, amount, description } = req.body;

        // Validation
        if ( name === undefined || amount === undefined ) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const earning = { name, amount, description };

        const connection = await getConnection();
        const result = await connection.query("UPDATE earnings SET ? WHERE id = ?",[earning, id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// DELETE Earning
const deleteEarning = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("DELETE FROM earnings WHERE id = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getEarnings,
    getEarningById,
    getEarningByName,
    getTotalEarnings,
    addEarning,
    updateEarning,
    deleteEarning
}
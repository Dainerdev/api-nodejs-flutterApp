import { getConnection } from "./../database/database";

// GET Expenses
const getExpenses = async (req, res) => {
    try {
        const { user_id } = req.params; 

        const connection = await getConnection();
        const result = await connection.query(" SELECT * FROM expenses WHERE user_id = ?", user_id);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Expense By Id
const getExpenseById = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM expenses WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Expense By Name
const getExpenseByName = async (req, res) => {
    try {
        const { user_id, name } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM expenses WHERE user_id = ? AND name = ?", [user_id, name]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET Total Expenses
const getTotalExpenses = async (req, res) => {
    try {
        const { user_id } = req.params; 

        const connection = await getConnection();
        const result = await connection.query(" SELECT SUM(amount) as total_expenses FROM expenses WHERE user_id = ?", user_id);
        res.json(result[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// POST Expense
const addExpense = async (req, res) => {
    try {
        const { user_id, name, amount, description } = req.body;

        //validation
        if ( user_id === undefined || name === undefined || amount === undefined ) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const expense = { user_id, name, amount, description };

        console.log(expense);

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO expenses SET ?", expense);
        res.json({ message: "Expense added." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// UPDATE Expense
const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, amount, description } = req.body;

        // Validation
        if ( name === undefined || amount === undefined ) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }

        const expense = { name, amount, description };

        const connection = await getConnection();
        const result = await connection.query("UPDATE expenses SET ? WHERE id = ?",[expense, id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// DELETE Expense
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("DELETE FROM expenses WHERE id = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getExpenses,
    getExpenseById,
    getExpenseByName,
    getTotalExpenses,
    addExpense,
    updateExpense,
    deleteExpense
}
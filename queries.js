const { query } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: 
    {
        rejectUnauthorized: false
    }
});
pool.connect();
const createUser = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let age = req.body.age;
    let queryString = `INSERT INTO users (first_name, last_name, email, user_age) VALUES('${firstName}', '${lastName}', '${email}', ${age})`;
    pool.query(
        queryString, 
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.redirect('/table');
            }
        }
    );
};

const displayUsers = (req, res) => {
    pool.query(
        'SELECT * FROM users', 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render('users', {users: result.rows});
        }
    );
};

const deleteUser = (req, res) => { 
    let userId = req.body.userId;
    pool.query(
        'DELETE FROM users WHERE id = $1', 
        [userId], 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.redirect('/table');
        }
    );
}; 

const sortOY = (req, res) => {
    pool.query(
        'SELECT * FROM users ORDER BY user_age DESC', 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render('users', {users: result.rows});
        }
    );
};

const sortYO = (req, res) => {
    pool.query(
        'SELECT * FROM users ORDER BY user_age ASC', 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render('users', {users: result.rows});
        }
    );
};

//THIS FUNCTION WORKS
const search = (req, res) => {
    let searchStr = req.body.search.trim();
    pool.query(
        `SELECT * FROM users WHERE first_name ILIKE '${searchStr}%'`,
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render('users', {users: result.rows}); 
        }
    );
};

const getUser = (req, res) => {
    let id = req.params.userId;
    pool.query(
        'SELECT * FROM users WHERE id = $1',
        [id],
        (err, result) => {
            if (err) {
                throw err;
            }
            let userInfo = result.rows[0];
            console.log(result.rows);
            res.render('editIndex', {
                firstNameField: userInfo.first_name,
                lastNameField: userInfo.last_name,
                emailField: userInfo.email,
                ageField: userInfo.user_age,
                userId: id
            });
        }
    );
};

const editUser = (req, res) => {
    let id  = req.params.userId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let age = req.body.age;
    pool.query(
        'UPDATE users SET first_name = $1, last_name = $2, email = $3, user_age = $4 WHERE id = $5',
        [firstName, lastName, email, age, id],
        (err, results) => {
            if (err) {
                throw err;
            } else {
                res.redirect('/table');
            }
        }
    );
}

module.exports = {
    createUser,
    displayUsers, 
    deleteUser, 
    sortOY,
    sortYO,
    search,
    getUser,
    editUser
};
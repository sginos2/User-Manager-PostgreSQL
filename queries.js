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
//this function needs to be async
// const createUser = (req, res) => {
//     let firstName = req.body.firstName;
//     let lastName = req.body.lastName;
//     let email = req.body.email;
//     let age = req.body.age;
//     let queryString = `INSERT INTO users (first_name, last_name, email, user_age) VALUES('${firstName}', '${lastName}', '${email}', ${age})`;
//     pool.query(
//         queryString, 
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`user added: ${result}`)
//             res.status(200).json(result.rows);
//             res.redirect('/table');
//         }
//     );
// };

//THIS FUNCTION WORKS
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

//THIS FUNCTION WORKS
const deleteUser = (req, res) => { 
    let userId = req.body.userId;
    pool.query(
        'DELETE FROM users WHERE id = $1', 
        [userId], 
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`user deleted`);
            res.redirect('/table');
        }
    );
}; 

//THIS FUNCTION WORKS
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

//THIS FUNCTION WORKS
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
        `SELECT * FROM users WHERE first_name LIKE '${searchStr}%'`,
        (err, result) => {
            if (err) {
                throw err;
            }
            res.render('users', {users: result.rows}); 
        }
    );
};

//THIS FUNCTION WORKS
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

//this function needs to be async
// const editUser = (req, res) => {
//     let id  = req.params.id;
//     let firstName = req.params.firstName;
//     let lastName = req.params.lastName;
//     let email = req.params.email;
//     let age = req.params.age;
//     pool.query(
//         'UPDATE users set first_name = $2, last_name = $3, email = $4, age = $5 where id = $1',
//         [id, firstName, lastName, email, age],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//             res.status(200).json(results.rows);
//             res.redirect('/table');
//         }
//     );
// }

module.exports = {
    // createUser,
    displayUsers, 
    deleteUser, 
    sortOY,
    sortYO,
    search,
    getUser,
    // editUser
};
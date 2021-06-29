const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    SSL: 
    {
        rejectUnauthorized: false
    }
});
pool.connect();
// const createUser = (req, res) => {
//     let firstName = req.params.firstName;
//     let lastName = req.params.lastName;
//     let email = req.params.email;
//     let age = req.params.age;
//     pool.query(
//         'INSERT INTO users (first_name, last_name, email, user_age) VALUES($1, $2, $3, $4)', 
//         [firstName, lastName, email, age],
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

// const displayUsers = (req, res) => {
//     pool.query(
//         'SELECT * FROM users', 
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             res.status(200).json(result.rows);
//             res.render('users', {users: result});
//         }
//     );
// };

// const deleteUser = (req, res) => { 
//     let userId = req.body.userId;
//     pool.query(
//         'DELETE FROM users WHERE id = $1', 
//         [userId], 
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`user deleted`);
//             res.redirect('/table');
//         }
//     );
// }; 

// const sortOY = (req, res) => {
//     pool.query(
//         'SELECT * FROM users ORDER BY user_age DESC', 
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             res.status(200).json(result.rows);
//         }
//     );
// };

// const sortYO = (req, res) => {
//     pool.query(
//         'SELECT * FROM users ORDER BY user_age ASC', 
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             res.status(200).json(result.rows); 
//         }
//     );
// };

// const search = (req, res) => {
//     let searchStr = req.body.search.trim();
//     pool.query(
//         'SELECT * FROM users WHERE first_name = $1',
//         [searchStr],
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             res.status(200).json(result.rows); 
//         }
//     );
// };

// const getUser = (req, res) => {
//     let id = req.params.userId;
//     pool.query(
//         'SELECT * FROM users WHERE id = $1',
//         [userId],
//         (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(result);
//             res.render('editIndex', {
//                 firstNameField: result.first_name,
//                 lastNameField: result.last_name,
//                 emailField: result.email,
//                 ageField: result.user_age,
//                 userId: id
//             });
//         }
//     );
// };

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

// module.exports = {
//     createUser,
//     displayUsers, 
//     deleteUser, 
//     sortOY,
//     sortYO,
//     search,
//     getUser,
//     editUser
// };
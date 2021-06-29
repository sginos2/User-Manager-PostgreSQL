const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    SSL: {rejectUnauthorized: false}
});
pool.connect();
// const createUser = (req, res) => { //post request
//     let firstName = req.params.firstName;
//     let lastName = req.params.lastName;
//     let email = req.params.email;
//     let age = req.params.age;
//     pool.query(
//         'INSERT INTO users (first_name, last_name, email, user_age) VALUES($1, $2, $3, $4)', 
//         [firstName, lastName, email, age],
//         (err, results) => {
//         if (err) {
//             throw err;
//         }
//         res.send(results);
//     });
// };
// const displayUsers = (req, res) => { //get request
//     console.log(`db getActors`);
//     pool.query('SELECT * FROM actor ORDER BY last_name ASC', (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.status(200).json(result.rows);
//     })
// }

// const deleteUser = (req, res) => {}; //post request

// const sortOY = (req, res) => {}; //get request

// const sortYO = (req, res) => {}; //get request

// const search = (req, res) => {}; //post request

// const getUser = (req, res) => {}; //get request

// const editUser = (req, res) => { //post request
//     let id  = req.params.id;
//     let firstname = req.params.firstname;
//     pool.query('update actor set first_name = $1 where actor_id = $2 returning *',
//     [firstname, id],
//     (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.status(200).json(results.rows);
//     })
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
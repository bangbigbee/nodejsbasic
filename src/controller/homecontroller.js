//import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import e from 'express';
import pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    //logic
    // simple query
    let data = [];

    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows, test: '' });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    console.log('check req: ', req.body)
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/')
}

let deleteUser = async function (_req, res) {
    let userId = _req.body.userId;
    await pool.execute('DELETE from users where id = ? ', [userId])
    return res.redirect('/');
}

let getEditPage = async (_req, res) => {
    let id = _req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id])
    //return res.send(JSON.stringify(user))
    return res.render('update.ejs', { dataUser: user[0] });
}

let postUpdateUser = async (_req, res) => {
    let { firstName, lastName, email, address, id } = _req.body;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id]);
    return res.redirect('/')
}
module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}
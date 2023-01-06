'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'products'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM students'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM students WHERE students.id = ?'
        db.query(sql, [req.params.studentsId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let studentsId = req.params.studentsId;
        let sql = 'UPDATE students SET ? WHERE id = ?'
        db.query(sql, [data, studentsId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO students SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM students WHERE id = ?'
        db.query(sql, [req.params.studentsId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
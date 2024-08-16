const express = require('express');
const connection = require('../connection');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

require('dotenv').config();

router.post('/signup', (req, res) => {
    let user = req.body;

    query = "select email, telefono, document_number, role, status from users where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "INSERT INTO users (first_name, last_name, last_name2, birth_date, email, telefono, document_type, document_number, user_type, gender, password, status, role) value (?,?,?,?,?,?,?,?,?,?,?,'false','user')";

                connection.query(query, [user.first_name, user.last_name, user.last_name2, user.birth_date, user.email, user.telefono, user.document_type, user.document_number, user.user_type, user.gender, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "succesful register." });
                    } else {
                        return res.status(200).json(err);
                    }
                });

            } else {
                return res.status(400).json({ message: "Email already exist." });
            }
        } else {
            return res.status(500).json(err);
        }
    });
});

router.post('/login', (req, res) => {
    const user = req.body;
    query = "select email, password, role, status from users where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: "Incorrect username or password" });
            } else if (results[0].status === "false") {
                return res.status(401).json({ message: "wait for admin approval" });
            } else if (results[0].password === user.password) {
                const response = { email: results[0].email, role: results[0].role };
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: "8h" });
                return res.status(200).json({ token: accessToken });
            } else {
                return res.status(400).json({ message: "Something went wrong. Please try again later" });
            }
        } else {
            return res.status(500).json(err);
        }
    });
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

router.post('/forgot', (req, res) => {
    const user = req.body;
    query = "select email, password from users where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(200).json({ message: "Password sent successfully to your email." });
            } else {
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'FINDETECH - RECUPERACIÓN DE ACCESOS',
                    html: '<p><b>Tus credenciales del sistema son los siguientes: </b><br> <b>EMAIL: </b>' + results[0].email + ' <br> <b>CLAVE: </b>' + results[0].password + '<br><a href="http://localhost:4200/">Click para acceder al sistema</a></p>'
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent successfully: " + info.response);
                    }
                });
                return res.status(200).json({ message: "Password sent successfully to your email." });
            }
        } else {
            return res.status(500).json(err);
        }
    });
});

module.exports = router;


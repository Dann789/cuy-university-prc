const express = require('express')
const mysql = require('mysql')
// BodyParser untuk ngepost form
const BodyParser = require('body-parser')
// Untuk bikin sesuatu di express js
const app = express();

// Format standar untuk menerima input
app.use(BodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views", "views") // Memberitahukan bahwa views template engine ada di folder views

// Inisialisasi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
})

// Connect ke database
db.connect((err) => {
    if (err) throw err
    console.log('Database connected...');

    // Untuk menampilkan atau get data
    app.get("/", (req, res) => {
        const sql = 'SELECT * FROM user'
        db.query(sql, (err, result) => {
            // Untuk menghilangkan RowDataPacket pada terminal atau diformat ulang hasil data yang tampil
            const users = JSON.parse(JSON.stringify(result))
            console.log("Hasil Database ->", users)
            res.render("index", {users: users, title: "Daftar Mahasiswa Tingkat Satu"})
        })
    })
    
    // Untuk insert data
    app.post("/tambah", (req, res) => {
        const insertData = `INSERT INTO user (nama, kelas) VALUES ('${req.body.nama}', '${req.body.kelas}');`
        db.query(insertData, (err, result) => {
            if (err) throw err
            res.redirect("/");
        })
    })
})

app.listen(8000, () => {
    console.log('Server Ready...');
})
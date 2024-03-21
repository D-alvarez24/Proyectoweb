const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.listen(3000, ()=>{
    console.log('Server corriendo en puerto 3000')

})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'David1109',
    database: 'manantial',

})

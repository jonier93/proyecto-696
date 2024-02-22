import mysql from 'mysql'

const conexion = mysql.createConnection( 
    {
        host: "db-696-class.czys8c6kiyal.us-east-1.rds.amazonaws.com",
        database: "db_696",
        user: "jonier",
        password: "12345678"
    }
)

conexion.connect(function(err) {
    if (err) {
        console.log("Conexión fallida " + err)
    }
    else {
        console.log("Conexión exitosa")
    }
})
// Requires
var expres = require("express");
var mongoose = require("mongoose");

//Inicializar variables
var app = expres();

//Conexion a la base de datos
// Conection to DB
mongoose.connection.openUri(
    "mongodb://localhost:27017/hospitalDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) throw err;

        console.log("Database conection: \x1b[32m%s\x1b[0m", "ONLINE");
    }
);
// mongoose.connection.openUri(
//     "mongodb://localhost:27017/hospitalDB",
//     (err, resp) => {
//         if (err) throw err;
//         console.log("Base de datos: \x1b[32m%s\x1b[0m", "online");
//     }
// );

//Rutas
//request, response, next
app.get("/", (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: "Peticion realizada correctamente"
    });
});

//escuchar peticiones
app.listen(3000, () => {
    console.log("Express server puerto 3000: \x1b[32m%s\x1b[0m", "online");
});
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Servir archivos estáticos
app.use(express.static('public'));
// Servir Bootstrap CSS y JS
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

// Servir jQuery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

// Ruta raíz
app.get("/", (req, res) => {
    const productos = [
        { nombre: "banana" },
        { nombre: "cebollas" },
        { nombre: "pimenton" },
        { nombre: "papas" },
        { nombre: "lechuga" },
        { nombre: "tomate" }
    ];
    res.render("dashboard", {
        productos: productos
    });
});



// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

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

// Ruta raíz
app.get("/", (req, res) => {
    res.render("dashboard", {
        layout: "main",
        productos: ["banana", "cebollas", "pimiento", "papas", "lechuga", "tomate"] // Ejemplo de arreglo de productos
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

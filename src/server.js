const express = require("express");
const path = require("path");

const db = require("./database");
const routes = require("./routes");

const app = express();

// Conectando bando de dados MongoDB
db.connectMongoDB();

// definindo o template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, "public")));

// definindo que o servidor vai receber dados de forms enviados pelo método POST
app.use(express.urlencoded({ extended: true }));

// definindo rotas atendidas pelo servidor
app.use("/", routes);

// 404 error
app.use((req, res) => {
  res.send("404 - Página não encontrada.");
});

// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listing on port ${port}.`));

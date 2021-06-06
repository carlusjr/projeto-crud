const router = require("express").Router();
const CustomerController = require("../controllers/customers");

// rotas
router.get("/", (req, res) => {
  res.render("index", {
    title: "Projeto CRUD",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Cadastro de Clientes",
  });
});

router.post("/register/add", CustomerController.add);

module.exports = router;
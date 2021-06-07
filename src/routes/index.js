const router = require("express").Router();
const CustomerController = require("../controllers/customers");
const IndexController = require("../controllers/index");

// rotas

// rota para index principal
router.get("/", IndexController.index );

// Rotas para cadastro de clientes
router.get("/register", CustomerController.index);
router.post("/register/add", CustomerController.add);
router.get("/list", CustomerController.list);
router.get("/edit", CustomerController.edit);
router.post("/edit/:id", CustomerController.update);
router.get("/remove/:id", CustomerController.remove);

module.exports = router;
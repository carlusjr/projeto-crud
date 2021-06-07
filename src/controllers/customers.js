const CustomerModel = require("../models/customers");
const { crypto } = require("../utils/password");

const pageTitle = "Cadastro de Clientes";

function index(req, res) {
  res.render("register", { title: pageTitle });
}

async function add(req, res) {
  // Obtém dados do formulário
  const { name, email, age, password } = req.body;

  // Criptografa a senha
  const pwdCrypto = await crypto(password);

  // Criar novo cliente no banco de dados
  const register = new CustomerModel({ name, email, age, password: pwdCrypto });
  register.save();

  res.render("register", {
    title: pageTitle,
    message: "Cliente salvo com sucesso!",
  });
}

async function list(req, res) {
  const customers = await CustomerModel.find();
  res.render("list", { title: "Listagem de Clientes", customers });
}

async function edit(req, res) {
  const { id } = req.query;
  const customer = await CustomerModel.findById(id);
  res.render("edit", { title: "Editar de Clientes", customer });
}

async function update(req, res) {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const customer = await CustomerModel.findById(id);
  customer.name = name;
  customer.email = email;
  customer.age = age;
  customer.save();
  res.render("edit", {
    title: "Editar de Clientes",
    message: "Alteração realizada com sucesso!",
    customer,
  });
}

async function remove(req, res) {
  const { id } = req.params;
  const removed = await CustomerModel.deleteOne({ _id: id });
  if (removed.ok) {
    res.redirect("/list");
  }  
}

module.exports = {
  index,
  add,
  list,
  edit,
  update,
  remove,
};
